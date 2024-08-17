const verifySameDomain = (req: any, res: any, next: any) => {
  const referer = req.headers.referer || "";
  const origin = req.headers.origin || "";
  const apiBaseUrl = new URL(req.url, `https://${req.headers.host}`);
  const apiDomain = apiBaseUrl.origin;
  if (!referer.startsWith(apiDomain) && !origin.startsWith(apiDomain)) {
    return res
      .status(403)
      .json({ message: "Forbidden: Access is restricted to the same domain" });
  }
  next();
};

export default verifySameDomain;
