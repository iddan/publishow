import Keen from 'keen-tracking';

const keen = new Keen({
  projectId: '59fc7c0cc9e77c0001ee54a7',
  writeKey:
    'E76829C828607EF6CA18C4D487369632940C549C18FFB146A48EC0CE340DF3A694670B78CB90D6C7E483ED345C45DCB4A2E7D08E1CDD9979878D14DD8A0C2C9437BA6C910AB6EBF1D47808441E8FC7E3A196A4640683E12359DFFBE7E62CE704',
});

export const track = (type, payload) => {
  keen.recordEvent(type, {
    ...payload,
    device: {
      ip: '${keen.ip}',
      user_agent: '${keen.user_agent}',
    },
    url: {
      source: window.location.href,
      protocol: window.location.protocol,
      domain: window.location.host,
      port: window.location.port,
      path: window.location.pathname,
      anchor: window.location.hash,
      query: window.location.search,
    },
    sessionId: Math.random().toString(32),
    keen: {
      addons: [
        {
          name: 'keen:ip_to_geo',
          input: {
            ip: 'device.ip',
          },
          output: 'device.geo_info',
        },
        {
          name: 'keen:ua_parser',
          input: {
            ua_string: 'device.user_agent',
          },
          output: 'device.user_agent',
        },
      ],
    },
  });
};
