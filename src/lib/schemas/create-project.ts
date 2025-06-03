import type { EModuleName } from '@/lib/modules';
import type { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import { featureNames, moduleFeatures } from '@/lib/features';
import { moduleNames } from '@/lib/modules';

import { EFontNames, ESocialNames, EThemeNames, themeNames } from '../customize-options';

export type CreateProjectForm = UseFormReturn<z.infer<typeof createProjectSchema>>;

export const createProjectSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .max(20, { message: 'Name must be at most 20 characters long.' })
    .regex(/^[\d A-Za-z-]+$/, {
      message: 'Name must contain only letters, numbers, hyphens, and spaces.'
    }),
  chainId: z
    .number({ message: 'Selecting a chain is required.' })
    .positive('Chain ID must be at least 1.'),
  contracts: z
    .record(z.enum(moduleNames), z.set(z.enum(featureNames)))
    .refine((value) => Object.keys(value).length > 0, {
      message: 'You must select at least one contract module for your project.'
    })
    .refine(
      (value) => {
        for (const [moduleName, featureNames] of Object.entries(value)) {
          const requiredFeatureNames = new Set(
            moduleFeatures[moduleName as EModuleName].filter((f) => f.required).map((f) => f.name)
          );
          if (![...featureNames].some((f) => requiredFeatureNames.has(f))) return false;
        }
        return true;
      },
      {
        message: 'You must select the base feature for the selected module.'
      }
    ),
  dapp: z
    .object({
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
    .optional(),
  checkout: z
    .object({
      paymentMethod: z.object({
        chainId: z.number(),
        currency: z.string(),
        currencyDecimals: z.number()
      }),
      voucherCode: z.string().optional()
    })
    .optional()
});

export type TCreateProjectSchema = z.infer<typeof createProjectSchema>;
