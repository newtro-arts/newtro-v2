export default function arrayPagination(query: any) {
  const MAX_LIMIT = 100;
  let limit = 50, offset = 0;

  if (parseInt(query?.limit) > 0) limit = parseInt(query.limit);
  if (parseInt(query?.offset) >= 0) offset = parseInt(query.offset);

  limit = limit > MAX_LIMIT ? MAX_LIMIT : limit;

  return { offset, limit };
}