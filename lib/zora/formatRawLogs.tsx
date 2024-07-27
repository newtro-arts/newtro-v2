import getLink from '../getLink';

const formatRawLogs = (rawLogs: any[]) =>
  rawLogs.map((log: any) => ({
    url: getLink(log.args.contractURI),
    contract: log.args.newContract,
    owner: log.args.creator,
  }));

export default formatRawLogs;
