import { z } from 'zod';

import { EFontNames, ESocialNames, EThemeNames, themeNames } from '@/lib/customize-options';

export type TCustomizeSchema = z.infer<typeof customizeSchema>;

export const customizeSchema = z.object({
  dapp: z.object({
    colorOption: z.enum(themeNames).default(EThemeNames.Twilight),
    fontOption: z.string().default(EFontNames.Jakarta),
    socialOption: z
      .object({
        [ESocialNames.Facebook]: z.string().url().optional(),
        [ESocialNames.X]: z.string().url().optional(),
        [ESocialNames.Discord]: z.string().url().optional(),
        [ESocialNames.Github]: z.string().url().optional(),
        [ESocialNames.Instagram]: z.string().url().optional(),
        [ESocialNames.Telegram]: z.string().url().optional()
      })
      .optional()
  })
});

export const dappEditSchema = z
  .object({
    name: z.string(),
    about: z.string(),
    bannerImageSrc: z.string(),
    projectImageSrc: z.string(),
    roadmap: z.array(
      z.object({
        title: z.string(),
        description: z.string()
      })
    )
  })
  .merge(customizeSchema);

export type TDappEditSchema = z.infer<typeof dappEditSchema>;
