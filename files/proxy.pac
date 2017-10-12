function FindProxyForURL(url, host)
{
 
// If the hostname matches, send to blackhole.
if (dnsDomainIs(host, "fuji.spps.org:8443") ||
dnsDomainIs(host, "fuji.spps.org:8443"))
{return "PROXY 127.0.0.1:8080";}
  
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "DIRECT";
    
}
