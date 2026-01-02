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
        const document = await strapi.documents(uid).findOne({ documentId });

        const pathname = getPreviewPathname(uid, { locale, document });

        if (!pathname) {
          return null;
        }

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
  { locale, document }: { locale?: string; document: any }
): string | null => {
  switch (uid) {
    case "api::home-page.home-page":
      return "/";
    default:
      return null;
  }
};
