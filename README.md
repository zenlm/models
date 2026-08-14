# @zenlm/models

The canonical Zen LM model catalog — specs, pricing, and families for the complete Zen model family.

## Install

```bash
npm install @zenlm/models
```

## Usage

```ts
import { allModels, families } from '@zenlm/models'
import type { ZenModel } from '@zenlm/models'

// Get all available models
const available = allModels.filter(m => m.status === 'available')

// Find a specific model
const zen5 = allModels.find(m => m.id === 'zen5')

// Browse by family
console.log(families.map(f => f.name))
```

## API

### `allModels: ZenModel[]`
Every Zen model, in one array.

### `families: ModelFamily[]`
Model families grouped by generation and capability.

### Types
- `ZenModel` — complete model definition
- `ModelSpec` — architecture and parameter spec
- `ModelPricing` — input/output cost per 1M tokens
- `ModelStatus` — `available` (open weights on HuggingFace) or `cloud-only` (served via API)

## Links

Each entry carries up to three: `huggingface` (weights), `github` (code), `paper`
(technical report). A link is present only when it resolves; anything unpublished
is `null` rather than a guess.

- [zenlm.org](https://zenlm.org)
- [HuggingFace](https://huggingface.co/zenlm)
- [GitHub](https://github.com/zenlm/models)
