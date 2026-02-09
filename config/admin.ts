export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  secrets: {
    encryptionKey: env("ENCRYPTION_KEY"),
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: env("CLIENT_URL"),
      async handler(uid, { documentId, locale, status }) {
        // Fetch the complete document from Strapi
        const document = await strapi.documents(uid).findOne({ documentId });
        // Generate the preview pathname based on content type and document
        const pathname = getPreviewPathname(uid, { locale, document });

        // Disable preview if the pathname is not found
        if (!pathname) {
          return null;
        }

        // Use Next.js draft mode passing it a secret key and the content-type status
        const urlSearchParams = new URLSearchParams({
          url: pathname,
          secret: env("PREVIEW_SECRET"),
          status,
        });

        return `${env("CLIENT_URL")}/api/preview?${urlSearchParams}`;
      },
    },
  },
});

const getPreviewPathname = (
  uid: string,
  { locale, document }: { locale?: string; document: any },
): string | null => {
  const { slug } = document;

  switch (uid) {
    // ** Handle pages with predefined routes (Single-Types Pages)**
    case "api::home-page.home-page":
      return "/";
    case "api::packages-page.packages-page":
      return "/packages";
    case "api::method-page.method-page":
      return "/method";
    case "api::about-page.about-page":
      return "/about";

    // ** Handle pages with dynamic routes (Collection-Types Pages) **
    case "api::learning-path.learning-path": {
      if (!slug) {
        return null; // There is no learning-paths single type page ATM!
      }
      return `/learning-paths/${slug}`;
    }
    case "api::package.package": {
      if (!slug) {
        return "/packages";
      }
      return `/packages/${slug}`;
    }

    // ** DEFAULT **
    default:
      return null;
  }
};
