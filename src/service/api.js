import axios from "axios";

export const base_url = "http://65.1.5.55:3000/team/get-list";

export const trail_urls = {
  getlist: "get-list",
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxTHFmeDNpekVmWUhhQ05LdTdabDVkc2lUWTYzIiwiaWF0IjoxNjcxMDE3OTU0LCJleHAiOjE2NzM2MDk5NTR9.Eo645GmwDzt0o3SBCTRs-Rn_Mx2QijsHr2KLosh-tc0";

// API calling
export const POST = async (body, errorMsg) => {
  return await axios({
    method: "POST",
    url: base_url,
    data: body,
    headers: { Authorization: "Bearer ".concat(token) },
  })
    .then((res) => res.data)
    .catch((e) =>
      errorMsg
        ? console.log("Error => ".concat(errorMsg), e)
        : console.log("Error => POST METHOD", e)
    );
};

// API calling
export const GET = async (trail_url, errorMsg) => {
  return await axios({
    method: "GET",
    url: base_url + trail_url,
    headers: { Authorization: "Bearer ".concat(token) },
  })
    .then((res) => res.data)
    .catch((e) =>
      errorMsg
        ? console.log("Error => ".concat(errorMsg), e)
        : console.log("Error => GET METHOD", e)
    );
};
