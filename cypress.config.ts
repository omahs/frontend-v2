import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Override by setting `CYPRESS_BASE_URL`
    baseUrl: "http://localhost:3000",
  },
  env: {
    // Override by setting `CYPRESS_DEFAULT_TEST_PK`
    DEFAULT_TEST_PK:
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  },
});
