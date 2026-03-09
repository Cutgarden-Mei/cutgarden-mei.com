# Contentful Model Design

## `siteSettings`

- `siteName`: Symbol
- `siteDescription`: Text
- `phoneNumber`: Symbol
- `reservationUrl`: Symbol
- `address`: Text
- `businessHours`: Text
- `holiday`: Symbol
- `instagramUrl`: Symbol
- `seoTitle`: Symbol
- `seoDescription`: Text

## `topPage`

- `heroEyebrow`: Symbol
- `heroTitle`: Symbol
- `heroDescription`: Text
- `heroImage`: Media
- `conceptTitle`: Symbol
- `conceptBody`: Rich Text
- `featuredMenuCategories`: Array<Link<menuCategory>>
- `featuredStaff`: Array<Link<staff>>
- `featuredVoices`: Array<Link<voice>>

## `menuCategory`

- `name`: Symbol
- `slug`: Symbol
- `description`: Text
- `displayOrder`: Integer

## `menuItem`

- `name`: Symbol
- `price`: Integer
- `durationMinutes`: Integer
- `description`: Text
- `notes`: Text
- `category`: Link<menuCategory>
- `displayOrder`: Integer

## `staff`

- `name`: Symbol
- `slug`: Symbol
- `role`: Symbol
- `bio`: Rich Text
- `specialties`: Array<Symbol>
- `profileImage`: Media
- `instagramUrl`: Symbol
- `displayOrder`: Integer
- `isPublished`: Boolean

## `voice`

- `customerName`: Symbol
- `menuLabel`: Symbol
- `comment`: Text
- `staff`: Link<staff>
- `displayOrder`: Integer
- `isPublished`: Boolean

## `newsPost`

- `title`: Symbol
- `slug`: Symbol
- `excerpt`: Text
- `body`: Rich Text
- `coverImage`: Media
- `category`: Symbol
- `publishedAt`: DateTime
- `isPublished`: Boolean

## `accessPage`

- `storeName`: Symbol
- `postalCode`: Symbol
- `address`: Text
- `phoneNumber`: Symbol
- `businessHours`: Text
- `holiday`: Symbol
- `parking`: Text
- `mapEmbedUrl`: Symbol
- `directions`: Rich Text

## `contactSettings`

- `toEmail`: Symbol
- `fromEmail`: Symbol
- `thanksMessage`: Text
- `privacyPolicyUrl`: Symbol
- `autoReplySubject`: Symbol
- `autoReplyBody`: Text
