# Fastrac Grosir

This application is designed for distributors or sales representatives in the field who need to showcase products and quickly place orders on behalf of a customer. You can the Live Demo [here](https://grosir-gules.vercel.app/)

## Running locally

Follow the steps below to set up and run your project:

### 1. Clone the Repository

Open your Terminal or Command Prompt and clone the project repository using Git:

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER_NAME>
```

### 2. Install Dependencies using Bun

Once inside the project directory, use Bun to install all necessary dependencies:

```bash
bun install
```

### 3. Configure Environment Variables

Create a file named .env or .env.development in the root directory of your project and add the required environment variables. please read setup shopify [here](https://vercel.com/docs/integrations/ecommerce/shopify).

#### Example .env.development File
```
COMPANY_NAME="Vercel Inc."
SITE_NAME="Next.js Commerce"
SHOPIFY_REVALIDATION_SECRET=""
SHOPIFY_STOREFRONT_ACCESS_TOKEN=""
SHOPIFY_STORE_DOMAIN="[your-shopify-store-subdomain].myshopify.com"
```

## Why Shopify & Setup Shopify

We've chosen Shopify as the primary backend API for this project over alternatives due to its robust functionality and developer experience.

### Shopify: The Ideal Solution

Shopify provides a comprehensive and reliable platform that perfectly matches the project's needs:

- **Meets API Requirements**: Shopify's Admin API and Storefront API are powerful and flexible, supporting all the core requirements of our application, including product listing, image retrieval, variant management, and structured data access.

- **Ease of Use**: Shopify has extensive, well-structured documentation and a widely adopted developer ecosystem, significantly streamlining the development and integration process.

### Why We Did Not Use Other APIs

The following APIs were considered but ultimately discarded due to significant limitations:

#### 1. Printful API

- **Lagging Documentation**: The Printful API documentation was excessively slow and laggy, which severely hindered the development process and made rapid integration difficult.

#### 2. Platzi Fake Store API

- **Missing Core Requirements**: The Platzi Fake Store API was not suitable as it lacks crucial features required for the application, most notably the ability to manage and retrieve product variants (e.g., different sizes, colors, and prices) which are essential for the ordering process.

### Shopify Setup Details

For a more comprehensive guide on setting up Shopify for this project, please visit the following link [here](https://vercel.com/docs/integrations/ecommerce/shopify)

## Architecture and Technical Specs

The application uses Next.js 16 and Shopify as the backend service, implementing high-performance data fetching via Server Components communicating with Shopify (GraphQL), while utilizing Next.js Server Actions and Optimistic UI for all mutations and cart management, concluding with an instant checkout process through a WhatsApp Encoded Link containing the full cart details.

### 1. Framework (Nextjs 16)

Selected for its powerful features, including Server Components, Server Actions, and integrated routing, which meet the project's performance requirements

### 2. Backend Service (Shopify)

Serves as the robust, commerce-specific backend for managing products, variants, and the cart system.

### 3. Data Fetching (RSC)

Maximizes performance by fetching data on the server, reducing client-side JavaScript bundle size and improving initial load times.

### 4. Data Mutation (Next.js Server Actions)

Used for all data manipulation (e.g., adding to cart, updating quantities), offering a secure and performant way to interact with the backend.

## Design & Security

### Design - Vercel Commerce Template

For the user interface and frontend structure, the project utilizes the [Vercel Commerce Template](https://vercel.com/templates/next.js/nextjs-commerce). This decision was made to significantly accelerate the development timeline, as the template is feature-rich and on-point, inherently fulfilling key requirements such as the product catalog display, search functionality, cart item management, and the crucial handling of product variations.

### Security - Secure by Default

From a security standpoint, the application maintains a high level of protection by implementing React Server Components (RSC). This architecture ensures that all data fetching operations targeting the Shopify backend service are executed exclusively on the server. As a result, sensitive API calls and the retrieval of backend data remain invisible to the end-user, safeguarding the system's credentials and data integrity.


## Trade-off and Future Improvements

This section outlines the key strategic compromises made during development and identifies areas for enhancement in future iterations.

### Trade-offs Made During Development ⚖️

We made several necessary technical compromises (trade-offs) to meet project deadlines and functional requirements:

1. **Backend Service Migration**: The project initially faced significant friction due to the limitations of two prospective backend services (Printful and Platzi Fake Store APIs). The decision to switch to Shopify mid-process, while necessary, consumed significant time, which impacted overall development momentum.

2. **Adopting Bleeding Edge Tech (Next.js 16)**: Using the absolute latest version of **Next.js 16** introduced unforeseen challenges, particularly due to **breaking changes in caching and revalidation behaviors**. This required substantial effort to adapt and means that some parts of the data-fetching and state management architecture **may not yet adhere to the absolute best practices** of the new framework version.

3. **Limited GraphQL/Shopify Exploration**: Due to a tight timeline and the newness of the **Shopify GraphQL API** to the development team, we were constrained in deeply exploring its full capabilities. Consequently, several features and integrations rely on the provided functionality and patterns within the chosen Vercel Commerce Template, rather than leveraging highly customized or complex Shopify features.

### What We Can Improve Next Time (Future Scope) ✨

With additional time and resources, the following areas would be prioritized for enhancement:

1. **Master Next.js 16 Caching**: Refactor and optimize the entire data layer to implement the best practices for component caching and revalidation using the latest Next.js 16 features, ensuring maximum performance and data integrity.

2. **Deep Shopify/GraphQL Integration**: Dedicate time to deeply study the **Shopify GraphQL API**. This would allow us to implement **more complex and detailed product search and filtering features** that go beyond the basic capabilities inherited from the template.

3. **User Experience (UX) Enhancements**:
    * Implement **visual loading indicators (spinners/skeletons)** on key interactive elements, such as the "Add to Cart" button, to provide instant feedback to the user.
    * Optimize mobile navigation by **moving the search bar outside of the mobile navigation menu** and placing it prominently on the main screen for easier, single-tap access.


## Experience and Key Learnings During the Project

This project provided invaluable hands-on experience and facilitated learning across several modern technologies and critical development processes.

### Key Experiences and Learnings 🧠

1. **Next.js 16 and Component Caching**: Gained practical experience implementing advanced features of **Next.js 16**, specifically mastering the use of **Server Components** and understanding the nuances of the **new caching and revalidation model** to optimize application performance.

2. **Shopify and GraphQL** Integration: Successfully integrated and worked with **Shopify** as a robust backend service. This involved a steep learning curve in querying commerce data efficiently using the **GraphQL API**.

3. **API Evaluation and Adaptation**: Engaged in critical evaluation of external services, specifically experimenting with the **Printful API** and the **Platzi Fake Store API**, which reinforced the importance of robust documentation and functional completeness when selecting a backend.

4. **Implementing Custom Checkout Logic**: Learned how to create non-traditional commerce workflows by successfully implementing the **WhatsApp link generation with URL-encoded text**, allowing for instant, pre-filled checkout messaging.

5. **Project Documentation**: Developed the critical skill of creating comprehensive and professional **project documentation**, outlining architecture, technical specifications, trade-offs, and future improvements.



