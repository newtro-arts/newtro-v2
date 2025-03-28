const verifySameDomain = (req: any, res: any, next: any) => {
  const referer = req.headers.referer || "";
  const origin = req.headers.origin || "";
  const host = req.headers.host;
  if (
    (referer && referer.includes(host)) ||
    (origin && origin.includes(host))
  ) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Forbidden: Access is restricted to the same domain" });
  }
};

export default verifySameDomain;
