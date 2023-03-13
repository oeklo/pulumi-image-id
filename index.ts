import * as hcloud from '@pulumi/hcloud';

const debian='45557056'
// const debian='debian-11'
const server = new hcloud.Server("server", {
    image: debian,
    serverType: "cx11",
});
