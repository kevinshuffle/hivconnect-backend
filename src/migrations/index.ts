import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251203_123731 from './20251203_123731';
import * as migration_20251210_014000_add_faqs_pages_collections from './20251210_014000_add_faqs_pages_collections';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251203_123731.up,
    down: migration_20251203_123731.down,
    name: '20251203_123731',
  },
  {
    up: migration_20251210_014000_add_faqs_pages_collections.up,
    down: migration_20251210_014000_add_faqs_pages_collections.down,
    name: '20251210_014000_add_faqs_pages_collections'
  },
];
