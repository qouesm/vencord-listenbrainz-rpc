import { CspPolicies, ConnectSrc } from "@main/csp";

CspPolicies["https://api.listenbrainz.org"] = ConnectSrc;
CspPolicies["https://musicbrainz.org"] = ConnectSrc;
CspPolicies["https://coverartarchive.org"] = ConnectSrc;
CspPolicies["https://archive.org"] = ConnectSrc;
CspPolicies["https://*.archive.org"] = ConnectSrc;
