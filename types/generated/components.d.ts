import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_with_images';
  info: {
    displayName: 'Content with Image';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['transparent', 'secondary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'transparent'>;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imagePositionDesktop: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    imagePositionMobile: Schema.Attribute.Enumeration<['top', 'bottom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'top'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_lists';
  info: {
    displayName: 'Feature List';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['transparent', 'secondary']> &
      Schema.Attribute.DefaultTo<'transparent'>;
    features: Schema.Attribute.Component<'shared.feature', true> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksIconCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_icon_cards';
  info: {
    displayName: 'Icon Cards';
    icon: 'apps';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['transparent', 'secondary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'secondary'>;
    iconCards: Schema.Attribute.Component<'shared.icon-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksLearningPaths extends Struct.ComponentSchema {
  collectionName: 'components_blocks_learning_paths';
  info: {
    displayName: 'Learning Paths';
    icon: 'apps';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['transparent', 'secondary']> &
      Schema.Attribute.DefaultTo<'transparent'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksPackages extends Struct.ComponentSchema {
  collectionName: 'components_blocks_packages';
  info: {
    displayName: 'Packages';
    icon: 'stack';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['transparent', 'secondary']> &
      Schema.Attribute.DefaultTo<'transparent'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'star';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['transparent', 'secondary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'transparent'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'Cta';
    icon: 'bell';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'accent']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
    icon: 'lightbulb';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIconCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_cards';
  info: {
    displayName: 'Icon Card';
    icon: 'puzzle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    externalUrl: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    type: Schema.Attribute.Enumeration<['internal', 'external']> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.content-with-image': BlocksContentWithImage;
      'blocks.feature-list': BlocksFeatureList;
      'blocks.hero': BlocksHero;
      'blocks.icon-cards': BlocksIconCards;
      'blocks.learning-paths': BlocksLearningPaths;
      'blocks.packages': BlocksPackages;
      'blocks.testimonials': BlocksTestimonials;
      'shared.cta': SharedCta;
      'shared.feature': SharedFeature;
      'shared.icon-card': SharedIconCard;
      'shared.link': SharedLink;
    }
  }
}
