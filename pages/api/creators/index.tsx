import type { NextApiRequest, NextApiResponse } from "next";

const ZORA_API_BASE_URL = "https://api.zora.co/discover/user/";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Hard-coded list of wallet addresses
    const walletAddresses = [
      "0x3E016a45bEc67Be824adc4cAfC7470D82FDaDafb",
      "0xBE8775738a8c0A23dBD23eA282FEDC1C30454f68",
      "0x0d9209C15BF6aD2A4242f97D9d5a0B087678B346",
      "0xC3ff8ff007a9878fe8505ed73DFfE22226ab5c10",
      "0xc8E86483958bc056F10f7D9Fe41b1F6d8c79aedE",
      "0x64bF8D9a93A5642cA93d98b5Db88B2Cc953c8426",
      "0x8557D85AC9C4989a650369FE419Bd5DfA4289Add",
      "0x32bD5D883D63643f532E7FBE9e9aa89B29Bb35c0",
      "0x97F1290F14cF27bC53fD9905A389a14AC0993B84",
      "0x12AACe3Ef656dDdE57bC75c13B35dc9A87c13D11",
      "0x5c21B0819c82E8c354f7895951587909920A50Cf",
      "0x2F087c11bEdd0f1541b20030428E24607446A568",
      "0x264db049d0cfa73Fb334cb605dc8C2843c1eDf95",
      "0x81a8Ccb2fA2BD6bDb67F50cCD6Dc860641381C07",
      "0x017A79f63500a3f26F27ab460332E56BfDA7C1eF",
      "0x1AF867Fd9f72d1b3Bd0C235a4774AE8FbC03d4f8",
      "0xfed52bF80D4231F7f6F017790935d0E44c59563b",
      "0x34C4358458d890C8652f339A55CdEa3034dF879F",
      "0xc17547cAc2e3275B95730c3Ca385aC47a6698C02",
      "0xC93300E267E4294311721954044fE2A99B40C507",
      "0x6C1cbe8cfC32A74188A9D3bF364945ea53b01b04",
      "0x9938d43D5078d8a3b2E45EA9A9D2bb98F6494385",
      "0xbDA96Bf910fD8B3731ce567A78aD3eb439eFe54c",
      "0x1f0516Aea01A79d16DDED1D4e7277AE2d3B9019D",
      "0x580E6F8c4ADf7C597AcaDac3eDCf9e1f04Da810a",
      "0xC94f7aF53BCEb4EA52b12c989781A6C1B8E54404",
      "0x803a8a20910D6c38f274AB6786A786c42F6F7f08",
      "0x13bA87706236BAB68747790Db953fbE754782B53",
      "0x2627f584D7A3A28C42b741Bf4cB3F7cD1571546c",
      "0x78B2De47FE499e0a6f7A67DBF965B8Ec765D2D9d",
      "0x79DBF0ed0895bEb9d9f2e71B1Ce3cfeC47b7416E",
      "0x361ABA78AE91ddcbf72b7618C88427834Dde5F09",
      "0xf618C91Cd8d00739e2C7043Bc0b76E90170a8f73",
      "0x5576274800a2C36489320b2D6994590dC0cF9D1F",
      "0x5DFCF95B7d689C11197D1576Ccd505F1f3188319",
      "0x7686E90E058702bD80abf3A10207346f2B963a49",
      "0x45c482f3EBFbfC08DAC537217db4b1332D66582b",
      "0xDE3125A64eD2551b094Db98Ea44BA288B5612b2B",
      "0xE15160EF9982346ad2874d322F644692D6B6057a",
      "0xD6536D1b36007a935251Ab1D2518672075B14e7C",
      "0xddf7103b5aba7c64f0fe22cf6c668eacaab39ea5",
      "0x68c0dd2b5A5df00Bca4f7df8CA9b1425Fe817728",
      "0x50aF54EdaBE7Fe57aE74F6D9C438AA5a80846513",
      "0x36885EC5123a065Cb16DfB48d643D7C0f70cA5F3",
      "0xD275Fa8933c6994e51A3337b65237800F4Ba54c1",
      "0xCCD073Af3818183499A7940a4a2f7CA311784f5a",
      "0xd6b84A2dE711DA13A98466988d1bea18a427E8B5",
      "0x2705F89C9D83e35971265CDBC2F7482ce671A476",
      "0x9c3A61f1A457109A37293b6C6188298fC249F2E0",
      "0xe60EAD0C469E9801c886ed1080524Fe9aB76BdfF",
      "0x52f9624409e9aa19a6ce397d8b4cb9d8de92c247",
      "0x14B015A7A4de3B306B34cfDe194949530f32C6f2",
      "0x580f76af265f488628C7F408Cd0518caDE45013C",
      "0x10a68f29B5f9a1d94AF3242a6616a834EEBDA495",
      "0xBBF5bda43218806b1cf73bA3d5ff3E9Ae76cf978",
      "0x95f3d9AdeAA7BeA423Dd20c8378A70730b365225",
      "0x5e9dE5F4B8a1708141aA5F8D5Cab85E71BEA0469",
      "0x133ca9a3f0fE9F2Ef8De02F80d5c92e78b278b8a",
      "0x620AeF3A9D19268e546869951BC37d6162cc67fA",
      "0x8aba9e7E406e25E4bc308A1Cb4E0cA3F6ee5e194",
      "0xB1478F4447f9d96B628a542F342E4b50aA2b5458",
      "0xA39a91FEE5e82423461cA5d18996A8995c8AF958",
      "0x304298DC92Df898586386B58f6C272D17bA683e6",
      "0x2Bf574300E45b8c8088Fd67177f6aa33425443E2",
      "0x6DD7C03fCfDd1E095a907B94B337c3BeBf6f1199",
      "0x1a755427474c0f0BE7df80A3Cb2e562955F1cc26",
      "0xFa09B9B8DF681be7Ea14F0726cdC7767BA69fACD",
      "0xea3B53a8FD8ff0826a4202E493F099C0AB433E9d",
      "0xfBF7E572a63ca6a4E21a83720c0f23Dd644e32e0",
      "0x81acbf867af819d566deddc48805c9db21f4b780",
      "0x2ecf93b9BF0Da8D75a6073034b2C1dD862A4f130",
      "0x940CC7b0325568C9AFb0E71950FCF694bb42a1D5",
      "0xca73a560a0f19c3289fa736fd89074afb2ff2f9a",
      "0x653d1d3b0db0bcad2ad18820a93c1f714b64764c",
      "0xa136c52c7065f0fa87284b823701befc1c5d9daf",
      "0x000A85355216F99AF7f57f7D9f1541d2CA2FFa1e",
      "0x765dd4daD0c0BdcbbC668903DdEA916a7AAdB19A",
      "0x0950BeeBd1372b785Ec1d686d209a1a648D18962",
      "0x8a7566A7CC9407f6327A09D86EB5C11A8e4AbCA4",
      "0x349F582d001528F0831CFC0f058ADeF0cfC2DE38",
      "0x709e984825B6607Cb7f5b713C2831841b4F43255",
      "0x1852D18723c279a08EF5a132D48325888a3a43b3",
      "0x3ffDDa001AAFadf883B163402eb8bb56285485Ce",
      "0x7ea241c5F3Cf56be1722762cb91502d6A947B5E8",
      "0xf0053596a366cfBcb368382BF741317D33d58CF9",
      "0x2f4044Be0302C73f511619C223e6fd3e32d09a11",
      "0x0B99E228C309588c904EFb77EF59443a56c3628a",
      "0x58833F22F389744dbF3cf1602968d6D843e7059a",
      "0x40edbb6687b50ada53cdaa6bb9e8c180a6a0beef",
      "0x90Fd357446EE067b7A69a8c042e5648554d5D063",
      "0x649752Ade9e65A013193fd56de8919250cE43105",
      "0xA6a7E13022517EdB03A4E3E85Cd76653C3c51f68",
      "0x00806e94e9d7fe715ea0ab12e8b1c96e8f827e63",
      "0xFfD99A6ED9643650267BdDDc938528BF683cE74C",
      "0x08b0f5500A7F4c370FDeA2Cdad4d9F0e9e69E5eC",
      "0x8e27BcC8749c2609A98259690974cc371E5d2Ff0",
      "0xDDbe6ebfaBa5e2B189DdA97Ffe5DA386fdBF2cAB",
      "0xD1E3FBBfA7Ba3F5D0c189C3C0858b1241d87d3b6",
      "0x2cf96b8f7a10c3ac77307984f9B0643De2ce4b00",
      "0xb3eab832ba07de1C9c321Dcd2dA8b54259C37FA8",
      "0x6Bbe5A633c17b36a5A1b91308697C8fBc4a5B31c",
      "0xB45dc0DFB637c351E80cC53a68FBEaAc286d40f9",
      "0x25f540289b738a4CB5bbbc0E542c6DCB1f34e938",
      "0x1d4ADf47B7a4584967a6f5Ccc625684732e0EFA1",
      "0x1911eca8087e08af77c8d8f7f4aacecd103db685",
      "0x63AEF30aF26D0024c82e8732F6095389438dEA53",
      "0xb74632D3739E652B88bCd2B9e10c93AdBE0B658f",
      "0x1F3fa1A72acc23bB2269a89b4A1363EE72a9D4bf",
      "0x4e6339e75FD045F6437EB9294c576c17D85fFe17",
      "0xf0025463C04f37CF353AC80E45Ca5A052f2eef54",
      "0x962306684536ff62A0Ee872eF582AA60f93c562b",
      "0xB3A3d21D9cd2045b139a64e0faB0Ee18b07C0C12",
      "0xB913577a132da2AdD2FE6cABED58DBA39ea165C6",
      "0x15F37394B40F78e640bfAd33975E9E6738f0D63A",
      "0x537bb51375cfdafdc56c02437dd5b3a469097ce3",
      "0xb73b9d43c0b96b9dec7dfd2f1487eb508bf8cda1",
      "0x70400e1b9cf40151e5c76df8b7c95c87001f51fb",
      "0x4e7323964808e3a4034c1ab8a515625cb3b70ca5",
      "0xC28ABA89a7E481D5728AA29C4292f43407497de9",
      "0x68a39155Dd3295eAbc20a2f656F0A3C15E16655f",
      "0xf2491fF3C05145d143607C3373344C722C04171A",
      "0xB77e10413f14f728BBDF5a577f80BC636B74cc13",
      "0x31F7DDEB88e494DcD39adc6245a834E5Fc8e7d81",
      "0x5caa2dcc1507a81da8cb7f527bc353f0833e13d4",
      "0x9e6a90134b48bf57b6bf0fa0d1a8d3f444d8d233",
      "0xf9a105A327FA4d69BABBb4930B4f431559F8667E",
      "0xcd1eD82b79f4E66C72CeC0C18a7Df8e8d7C97454",
      "0xC8c9811c982A946F15dDf81131B6920A3299bb66",
      "0xc1Ca2db6EC9cFD6Ff95aEB67A11B5906817Da253",
      "0xC49Ae1b01A36886a79E886aB3260B000cb0e8a53",
      "0x1C4ee3e86c81D06Dc5E489637cc72D9786971290",
      "0x5BE55475d7eB658F3b5a191e1cf653Ea86fB88ff",
      "0x8f87c1E41b2754AF8ED0165B72bd76d95A4Dc242",
      "0xd28C76600bE9a4133ae635616C320d58289b7bB1",
      "0x752e0F06B16508A9AF8FED877203afd660E515f6",
      "0xAF47F60755d9B7F031f659cF9AE22Dcc0838446A",
      "0x6747689553a3aD92f1a54acba5D0EC603c01d38A",
      "0x6Ec7E768Eb6E58DC8197182c620D9D2388750035",
      "0x8556ffDb5c8Cc82a183a65be3D82e70afdE879F5",
      "0xefDDc49Eed327824fe08536f268B34364C68FcF4",
      "0xD7735293971e18bA0a008711a2770E69a147B942",
      "0xbA9EB14b7404dA904611F1502867B8e6cF893FAd",
      "0x18dd2b4559711022790136a4eff041ac8a781519",
      "0x066CEa4Ef831B810605b6b3382F9e1F839f8150a",
      "0x81e930121b81664aF582041B218A6c57E0fAE03D",
      "0xaa830481E5D22d5C9Efa41833FF5a3C23970DC13",
      "0x05121FDd48722e419f408B26401E2D64daCb5DB8",
      "0x7a09C7b1f961960f4803989D2E841916534216c0",
      "0x4C44f78BbA24af8eC71C919BE27025C33F5D0555",
      "0x3c848618C3B373F2e02FF2E25d13f9040dE519c3",
      "0xeF43Aa3d344951397212cec23FdED6C37A0940C7",
      "0xfD8359fE22305245074f12d7dC42931c7344f830",
      "0xc797973959A020C34449E745526E310C8904B2C4",
      "0xDB605A1740FeD4C15e6A4b9cC5923f72f383b4f7",
      "0x20846c7FD7F757d193Ee692a8391b9C85D87d908",
      "0x5200F2518f8fab095DA876AEb86ff3F1b7157038",
      "0x2460Ba58a8B0eFf39E2B09c6655B69D9C28F6c63",
      "0x128a46577eaa3DdC4cAFe3cF90C6F51b645f07BC",
      "0xc1302f576586e58DB6cefE79e8f371604A3a4277",
      "0x3a8ca559b86c273A16343dE4C8ebd664c5B6630E",
      "0x8A02bAd6BC9D6A3465E652Bae33566198C38FF9e",
      "0xA51e8fa0E50469b0247d07Fe78441F5f9B2ade54",
      "0x702D32Aa455e0002E411853f105EB19505E27E74",
      "0x71b9e1563978c7960A16CB8d3b97d06DFBfA90c8",
      "0x7f68e857Dd71f44e3B1b925463Fd8eb2Bd3237f3",
      "0xe1dd9Ee3654C5c8d00F13c1DBA8f5604c87BAAc4",
      "0x511Dc8cEdD67A5fc54d3a4b4BC361454E40409Fa",
      "0x0ccCB3Cf27DB7CF86BF0896b72beF53c9Da44226",
      "0xcfc166c983e543ec02805ac8f8b3bd3521db752c",
      "0x64486801A0F73868AE578D5BC9Abf43316470080",
      "0x4B8C45e82E9Ed5f7213A4D0Fa4a87EA7f1c76e03",
      "0x8a5C95529A13084fd7596Def52bFA058Cb714Dc2",
      "0x16eD78196a085720A89e0D20cf0DA31514991A69",
      "0x3B259c42D1cc396B83a371270dab5300277A2fB4",
      "0x9AAF632412eA5296B7AF098233053147D75359Af",
      "0x3db1E107AFf5A3978fB2BFde45d33194F38FefF7",
      "0xC56804F88F89C4cca28b4D060BE99BfEB0A6e299",
      "0xFb79B46143E4964fCd7aBcc447bBcaC1E95CFD3B",
      "0x95a71766817D033b3a537123fd0a669C3AA8118B",
    ];

    // Fetch data for each wallet address using Promise.all
    const fetchPromises = walletAddresses.map((address) =>
      fetch(`${ZORA_API_BASE_URL}${address}`).then((response) =>
        response.json()
      )
    );

    const results = await Promise.all(fetchPromises);

    // Handle results, you can format them or process as needed
    res.status(200).json({ data: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data from Zora API" });
  }
};

export default handler;
