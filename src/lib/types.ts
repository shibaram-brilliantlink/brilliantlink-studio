/* Temporary file , define all types on the same page where component is defined......

-- will delete soon ---
-----------------------------------------------------------
-----------------------------------------------------------
*/

//contact form page types
export interface formData {
  fullname: string;
  email: string;
  message: string;
}
export interface formErrors {
  fullname: string;
  email: string;
  message: string;
}
export type IPageComponent = {
  //Currently only blog data props from strapi response
  id: string;
  // documentId: string;
  title: string;
  summary: string;
  readTime: string;
  publishedAt: string;
};
