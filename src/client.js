import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client=sanityClient({
    projectId:'cdt1txib',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:'skBJRFpfm8gEPrRqN0Uzbl00kVcWPr4n9JxlXkuuVYDv8mj8NNKG4zbmQg8L3Uv8eGE2M30u0oiAs9umGrhcB3qkZeyTsbfXYZa6RsefM2hnODnxrz1bZoFzegiRDVYssVRdh7FxHfm8osc7PexyknrOfHROWrua5QEz9qLnG4mTDzmJvkU1',
});

const builder=imageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source)