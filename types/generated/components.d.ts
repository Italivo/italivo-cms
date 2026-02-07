import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contents';
  info: {
    displayName: 'Content';
    icon: 'layer';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['transparent', 'secondary']> &
      Schema.Attribute.DefaultTo<'transparent'>;
    buttonLink: Schema.Attribute.Component<'shared.button-link', false>;
    content: Schema.Attribute.RichText;
    disclaimer: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_with_images';
  info: {
    displayName: 'Content with Image';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['transparent', 'secondary']> &
      Schema.Attribute.DefaultTo<'transparent'>;
    buttonLink: Schema.Attribute.Component<'shared.button-link', false>;
    content: Schema.Attribute.RichText;
    disclaimer: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imagePositionDesktop: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    imagePositionMobile: Schema.Attribute.Enumeration<['top', 'bottom']> &
      Schema.Attribute.DefaultTo<'top'>;
    subtitle: Schema.Attribute.String;
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
    buttonLink: Schema.Attribute.Component<'shared.button-link', false>;
    imageDesktop: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    buttonLink: Schema.Attribute.Component<'shared.button-link', false>;
    content: Schema.Attribute.RichText;
    disclaimer: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_blocks_process_steps';
  info: {
    displayName: 'Process Steps';
    icon: 'bulletList';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['transparent', 'secondary']> &
      Schema.Attribute.DefaultTo<'transparent'>;
    content: Schema.Attribute.RichText;
    steps: Schema.Attribute.Component<'shared.process-step', true>;
    subtitle: Schema.Attribute.String;
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

export interface SharedButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_links';
  info: {
    displayName: 'ButtonLink';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'accent']> &
      Schema.Attribute.DefaultTo<'accent'>;
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

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['internal', 'external', 'free-call']> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_process_steps';
  info: {
    displayName: 'Process Step';
    icon: 'cog';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.content': BlocksContent;
      'blocks.content-with-image': BlocksContentWithImage;
      'blocks.feature-list': BlocksFeatureList;
      'blocks.hero': BlocksHero;
      'blocks.learning-paths': BlocksLearningPaths;
      'blocks.packages': BlocksPackages;
      'blocks.process-steps': BlocksProcessSteps;
      'blocks.testimonials': BlocksTestimonials;
      'shared.button-link': SharedButtonLink;
      'shared.feature': SharedFeature;
      'shared.link': SharedLink;
      'shared.process-step': SharedProcessStep;
    }
  }
}
