const backendDomain = "http://localhost:8080";

const SummaryApi = {
    AllProducts: {
        url: `${backendDomain}/products`,
        method: 'GET'
    },
    ProductById: {
        url: `${backendDomain}/products/:id`,
        method: 'POST'
    }
};

export default SummaryApi;
