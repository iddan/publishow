class Endpoint {
  constructor(url: string, api: WordPress) {
    this.url = url;
    this.api = api;
  }

  get = async (searchParams = {}) => {
    const url = new URL(this.url, this.api.baseURL);
    for (const [name, value] of Object.entries(searchParams)) {
      url.searchParams.set(name, value);
    }
    const res = await fetch(url);
    return await res.json();
  };
}

class WordPress {
  posts = new Endpoint('posts', this);
  tags = new Endpoint('tags', this);

  constructor(baseURL) {
    this.baseURL = baseURL;
  }
}

export default WordPress;
