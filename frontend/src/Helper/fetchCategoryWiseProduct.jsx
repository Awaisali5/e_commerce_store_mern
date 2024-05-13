const backendDomin = "http://localhost:8080";

const SummaryApi = {
    categoryWiseProduct: {
        url: `${backendDomin}/products`, // Example URL
        method: 'GET' // Example method
    },
    // Add other API endpoints as needed
};




const fetchCategoryWiseProduct = async (category) => {
    try {
        const response = await fetch(SummaryApi.categoryWiseProduct.url, {
            method: SummaryApi.categoryWiseProduct.method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({

                category: category,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const dataResponse = await response.json();
        return dataResponse;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error to be caught by the caller
    }
};

export default fetchCategoryWiseProduct;
