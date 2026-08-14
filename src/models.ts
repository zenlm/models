/**
 * @zenlm/models — The single source of truth for all Zen model definitions.
 *
 * Every Zen surface (zenlm.org, hanzo.ai, …) imports from here. Never duplicate
 * model specs elsewhere.
 *
 * Open-weight entries are honest repackages of permissively-licensed upstreams
 * (Qwen, DeepSeek, MiniMax, IBM Granite, YuE, Wan); each HuggingFace card states
 * its `base_model` and license. Served-only SKUs carry `status: 'cloud-only'`
 * with `huggingface: null`.
 *
 * Weights live on HuggingFace, code on GitHub, reports in zenlm/papers — three
 * separate questions, three fields, each resolving or `null`. A repo is claimed
 * only where it names the model's HuggingFace id or carries its base_model; a
 * name that merely rhymes is not evidence, so several entries stay null while
 * the repo they sound like belongs to a different model.
 */

import type { ZenModel } from './types'

// ---------------------------------------------------------------------------
// Zen5 — flagship generation (text / code / math)
// ---------------------------------------------------------------------------

export const zen5: ZenModel = {
  id: 'zen5',
  name: 'Zen5',
  fullName: 'Zen5',
  description:
    'Flagship model. Sparse mixture-of-experts, 35B total / 3B active per token. Open weights are a GGUF repackage of Qwen3.6-35B-A3B (Apache-2.0).',
  generation: 'zen5',
  tier: 'standard',
  category: 'flagship',
  modalities: ['text', 'code', 'math'],
  spec: { params: '35B', activeParams: '3B', context: 1_000_000, arch: 'MoE' },
  pricing: { input: 3, output: 9.6, cacheRead: null, cacheWrite: null },
  features: ['1M context', 'MoE 35B/3B active', 'Open GGUF weights'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen5-gguf',
  github: 'https://github.com/zenlm/zen5',
  paper: null,
  aliases: ['zen'],
}

export const zen5Mini: ZenModel = {
  id: 'zen5-mini',
  name: 'Zen5 Mini',
  fullName: 'Zen5 Mini',
  description:
    'Fast, low-cost tier. Agentic MoE with ~10B active parameters per token. Open weights are a GGUF repackage of MiniMax-M2.5 (modified-MIT).',
  generation: 'zen5',
  tier: 'mini',
  category: 'flagship',
  modalities: ['text', 'code'],
  spec: { params: null, activeParams: '10B', context: 1_000_000, arch: 'MoE' },
  pricing: { input: 0.1, output: 0.3, cacheRead: null, cacheWrite: null },
  features: ['1M context', '~10B active MoE', 'Low cost'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen5-mini-gguf',
  github: null,
  paper: null,
  aliases: [],
}

export const zen5Coder: ZenModel = {
  id: 'zen5-coder',
  name: 'Zen5 Coder',
  fullName: 'Zen5 Coder',
  description:
    'Code-specialized MoE, 80B total / 3B active per token. Open weights are a GGUF repackage of Qwen3-Next-80B-A3B-Instruct (Apache-2.0).',
  generation: 'zen5',
  tier: 'standard',
  category: 'code',
  modalities: ['text', 'code'],
  spec: { params: '80B', activeParams: '3B', context: 1_000_000, arch: 'MoE' },
  pricing: { input: 3, output: 9.6, cacheRead: null, cacheWrite: null },
  features: ['1M context', 'MoE 80B/3B active', 'Repo-scale code'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen5-coder-gguf',
  github: null,
  paper: null,
  aliases: [],
}

export const zen5Pro: ZenModel = {
  id: 'zen5-pro',
  name: 'Zen5 Pro',
  fullName: 'Zen5 Pro',
  description:
    'Higher-capability tier for demanding production workloads. The served SKU is full-precision in the cloud; the linked repo is a low-bit (IQ2XXS) GGUF re-host of DeepSeek-V4-Flash for local runs.',
  generation: 'zen5',
  tier: 'pro',
  category: 'flagship',
  modalities: ['text', 'code', 'math'],
  spec: { params: null, activeParams: null, context: 1_000_000, arch: 'MoE' },
  pricing: { input: 9, output: 27, cacheRead: null, cacheWrite: null },
  features: ['1M context', 'Higher capability', 'IQ2XXS GGUF re-host'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen5-pro-gguf',
  github: null,
  paper: null,
  aliases: [],
}

export const zen5Max: ZenModel = {
  id: 'zen5-max',
  name: 'Zen5 Max',
  fullName: 'Zen5 Max',
  description:
    'Maximum-capability tier for the hardest reasoning and agentic tasks. The served SKU is full-precision in the cloud; the linked repo is a low-bit (IQ2XXS) GGUF re-host of DeepSeek-V4-Pro for local runs.',
  generation: 'zen5',
  tier: 'max',
  category: 'flagship',
  modalities: ['text', 'code', 'math'],
  spec: { params: null, activeParams: null, context: 1_000_000, arch: 'MoE' },
  pricing: { input: 12, output: 36, cacheRead: null, cacheWrite: null },
  features: ['1M context', 'Maximum capability', 'IQ2XXS GGUF re-host'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen5-max-gguf',
  github: null,
  paper: null,
  aliases: [],
}

// ---------------------------------------------------------------------------
// Zen3 — multimodal, vision-language, and safety
// ---------------------------------------------------------------------------

export const zen3Omni: ZenModel = {
  id: 'zen3-omni',
  name: 'Zen3 Omni',
  fullName: 'Zen3 Omni',
  description:
    'Multimodal model (text + vision), 30B total / 3B active MoE. Open weights repackage Qwen3-Omni-30B-A3B-Instruct (Apache-2.0).',
  generation: 'zen3',
  tier: 'standard',
  category: 'vision',
  modalities: ['text', 'vision'],
  spec: { params: '30B', activeParams: '3B', context: 131_072, arch: 'MoE Vision-Language' },
  pricing: { input: 2, output: 6, cacheRead: null, cacheWrite: null },
  features: ['131K context', 'Text + vision', 'MoE 30B/3B active'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen3-omni',
  github: 'https://github.com/zenlm/zen-omni',
  paper: 'https://github.com/zenlm/papers/blob/main/zen3-omni_whitepaper.pdf',
  aliases: [],
}

export const zen3Vl: ZenModel = {
  id: 'zen3-vl',
  name: 'Zen3 VL',
  fullName: 'Zen3 VL',
  description:
    'Vision-language model for image understanding, 8B dense. Open weights repackage Qwen3-VL-8B-Instruct (Apache-2.0).',
  generation: 'zen3',
  tier: 'mini',
  category: 'vision',
  modalities: ['text', 'vision'],
  spec: { params: '8B', activeParams: null, context: 128_000, arch: 'Dense' },
  pricing: { input: 0.45, output: 1.8, cacheRead: null, cacheWrite: null },
  features: ['128K context', 'Text + vision', 'Low cost'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen3-vl',
  github: 'https://github.com/zenlm/zen-vl',
  paper: 'https://github.com/zenlm/papers/blob/main/zen3-vl_whitepaper.pdf',
  aliases: [],
}

export const zen3Guard: ZenModel = {
  id: 'zen3-guard',
  name: 'Zen3 Guard',
  fullName: 'Zen3 Guard',
  description:
    'Safety classifier for content moderation and guardrails, ~5B dense. Open weights repackage ibm-granite/granite-guardian-3.2-5b (Apache-2.0).',
  generation: 'zen3',
  tier: 'standard',
  category: 'safety',
  modalities: ['text', 'safety'],
  spec: { params: '5B', activeParams: null, context: 128_000, arch: 'Dense' },
  pricing: { input: 0.3, output: 0.3, cacheRead: null, cacheWrite: null },
  features: ['128K context', 'Content moderation'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen3-guard',
  github: null,
  paper: 'https://github.com/zenlm/papers/blob/main/zen3-guard_whitepaper.pdf',
  aliases: [],
}

// ---------------------------------------------------------------------------
// Embedding & reranking (served endpoints)
// ---------------------------------------------------------------------------

export const zen5Embedding: ZenModel = {
  id: 'zen5-embedding',
  name: 'Zen5 Embedding',
  fullName: 'Zen5 Embedding',
  description: 'Text-embedding endpoint in the Zen5 line for RAG, search, and classification. Served via API.',
  generation: 'zen5',
  tier: 'standard',
  category: 'embedding',
  modalities: ['embedding'],
  spec: { params: null, activeParams: null, context: 32_768, arch: 'Embedding' },
  pricing: { input: 0.05, output: 0.05, cacheRead: null, cacheWrite: null },
  features: ['32K context', 'Dense retrieval'],
  status: 'cloud-only',
  huggingface: null,
  github: null,
  paper: null,
  aliases: [],
}

export const zen3Embedding: ZenModel = {
  id: 'zen3-embedding',
  name: 'Zen3 Embedding',
  fullName: 'Zen3 Embedding',
  description:
    'Text-embedding endpoint in the Zen3 line for RAG, search, and classification. Served via API; open weights available under the zen-embedding-* repos.',
  generation: 'zen3',
  tier: 'standard',
  category: 'embedding',
  modalities: ['embedding'],
  spec: { params: null, activeParams: null, context: 32_768, arch: 'Embedding' },
  pricing: { input: 0.39, output: 0.39, cacheRead: null, cacheWrite: null },
  features: ['32K context', 'Dense retrieval'],
  status: 'cloud-only',
  huggingface: null,
  github: null,
  paper: 'https://github.com/zenlm/papers/blob/main/zen3-embedding_whitepaper.pdf',
  aliases: [],
}

export const zenRerank: ZenModel = {
  id: 'zen-rerank',
  name: 'Zen Rerank',
  fullName: 'Zen Rerank',
  description:
    'Reranking endpoint that re-scores candidate passages for retrieval pipelines. Served via API, billed per unit; open weights available under the zen-reranker-* repos.',
  generation: 'foundation',
  tier: 'standard',
  category: 'embedding',
  modalities: ['embedding'],
  spec: { params: null, activeParams: null, context: 0, arch: 'Reranker' },
  pricing: { input: 0.02, output: 0.02, cacheRead: null, cacheWrite: null },
  features: ['Cross-encoder reranking', 'Per-unit billing'],
  status: 'cloud-only',
  huggingface: null,
  github: null,
  paper: null,
  aliases: [],
}

// ---------------------------------------------------------------------------
// Media generation (served endpoints, per-unit billing)
// ---------------------------------------------------------------------------

export const zenImage: ZenModel = {
  id: 'zen-image',
  name: 'Zen Image',
  fullName: 'Zen Image',
  description:
    'Text-to-image diffusion endpoint. Served via API, billed per image; open weights available under zen3-image.',
  generation: 'foundation',
  tier: 'standard',
  category: 'image',
  modalities: ['vision'],
  spec: { params: null, activeParams: null, context: 0, arch: 'Diffusion' },
  pricing: { input: 0.04, output: 0.04, cacheRead: null, cacheWrite: null },
  features: ['Text-to-image', 'Per-image billing'],
  status: 'cloud-only',
  huggingface: null,
  github: null,
  paper: null,
  aliases: [],
}

export const zenVoice: ZenModel = {
  id: 'zen-voice',
  name: 'Zen Voice',
  fullName: 'Zen Voice',
  description:
    'Text-to-speech endpoint. Served via API, billed per unit; open weights available under zen3-tts.',
  generation: 'foundation',
  tier: 'standard',
  category: 'audio',
  modalities: ['audio'],
  spec: { params: null, activeParams: null, context: 0, arch: 'TTS' },
  pricing: { input: 0.015, output: 0.015, cacheRead: null, cacheWrite: null },
  features: ['Text-to-speech', 'Per-unit billing'],
  status: 'cloud-only',
  huggingface: null,
  github: null,
  paper: 'https://github.com/zenlm/papers/blob/main/zen-voice-clone.pdf',
  aliases: [],
}

export const zenMusic: ZenModel = {
  id: 'zen-music',
  name: 'Zen Music',
  fullName: 'Zen Music',
  description:
    'Text-to-music endpoint. Served via API, billed per unit; open weights available under zen-musician.',
  generation: 'foundation',
  tier: 'standard',
  category: 'audio',
  modalities: ['audio'],
  spec: { params: null, activeParams: null, context: 0, arch: 'Dense' },
  pricing: { input: 0.1, output: 0.1, cacheRead: null, cacheWrite: null },
  features: ['Text-to-music', 'Per-unit billing'],
  status: 'cloud-only',
  huggingface: null,
  github: null,
  paper: null,
  aliases: [],
}

export const zenFoley: ZenModel = {
  id: 'zen-foley',
  name: 'Zen Foley',
  fullName: 'Zen Foley',
  description: 'Text-to-sound-effects endpoint. Served via API, billed per unit.',
  generation: 'foundation',
  tier: 'standard',
  category: 'audio',
  modalities: ['audio'],
  spec: { params: null, activeParams: null, context: 0, arch: 'Diffusion' },
  pricing: { input: 0.05, output: 0.05, cacheRead: null, cacheWrite: null },
  features: ['Text-to-sound-effects', 'Per-unit billing'],
  status: 'cloud-only',
  huggingface: null,
  github: 'https://github.com/zenlm/zen-foley',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-foley.pdf',
  aliases: [],
}

export const zenVideo: ZenModel = {
  id: 'zen-video',
  name: 'Zen Video',
  fullName: 'Zen Video',
  description:
    'Text-to-video diffusion endpoint. Served via API, billed per unit; related open weights: zen-video-i2v (Wan2.2).',
  generation: 'foundation',
  tier: 'standard',
  category: 'video',
  modalities: ['video'],
  spec: { params: null, activeParams: null, context: 0, arch: 'Diffusion' },
  pricing: { input: 0.5, output: 0.5, cacheRead: null, cacheWrite: null },
  features: ['Text-to-video', 'Per-unit billing'],
  status: 'cloud-only',
  huggingface: null,
  github: 'https://github.com/zenlm/zen-video',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-video.pdf',
  aliases: [],
}

// ---------------------------------------------------------------------------
// Open-weight text models (HuggingFace)
// ---------------------------------------------------------------------------

export const zen3Nano: ZenModel = {
  id: 'zen3-nano',
  name: 'Zen3 Nano',
  fullName: 'Zen3 Nano',
  description: 'Compact 8B dense text model. Open-weight repackage of Qwen/Qwen3-8B (Apache-2.0).',
  generation: 'zen3',
  tier: 'mini',
  category: 'flagship',
  modalities: ['text', 'code'],
  spec: { params: '8B', activeParams: null, context: 40_960, arch: 'Dense' },
  pricing: null,
  features: ['40K context', '8B dense'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen3-nano',
  github: null,
  paper: 'https://github.com/zenlm/papers/blob/main/zen3-nano_whitepaper.pdf',
  aliases: [],
}

export const zenNano: ZenModel = {
  id: 'zen-nano',
  name: 'Zen Nano',
  fullName: 'Zen Nano',
  description: '0.6B dense text model for edge and mobile. Open-weight repackage of Qwen/Qwen3-0.6B (Apache-2.0).',
  generation: 'foundation',
  tier: 'mini',
  category: 'flagship',
  modalities: ['text', 'code'],
  spec: { params: '0.6B', activeParams: null, context: 40_960, arch: 'Dense' },
  pricing: null,
  features: ['40K context', '0.6B dense', 'Edge / mobile'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-nano-0.6b',
  github: 'https://github.com/zenlm/zen-nano',
  paper: 'https://github.com/zenlm/zen-nano/blob/main/paper/paper.pdf',
  aliases: [],
}

export const zenEco: ZenModel = {
  id: 'zen-eco',
  name: 'Zen Eco',
  fullName: 'Zen Eco',
  description: 'Efficient 4B dense text model. Open-weight repackage of Qwen/Qwen3-4B (Apache-2.0).',
  generation: 'foundation',
  tier: 'mini',
  category: 'flagship',
  modalities: ['text', 'code'],
  spec: { params: '4B', activeParams: null, context: 262_144, arch: 'Dense' },
  pricing: null,
  features: ['262K context', '4B dense'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-eco-4b-instruct',
  github: 'https://github.com/zenlm/zen-eco',
  paper: 'https://github.com/zenlm/zen-eco/blob/main/paper/paper.pdf',
  aliases: [],
}

// ---------------------------------------------------------------------------
// Open-weight embeddings & rerankers (HuggingFace)
// ---------------------------------------------------------------------------

export const zenEmbedding8B: ZenModel = {
  id: 'zen-embedding-8b',
  name: 'Zen Embedding 8B',
  fullName: 'Zen Embedding 8B',
  description: '8B text-embedding model for dense retrieval. Open-weight repackage of Qwen/Qwen3-Embedding-8B (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'embedding',
  modalities: ['embedding'],
  spec: { params: '8B', activeParams: null, context: 40_960, arch: 'Embedding' },
  pricing: null,
  features: ['40K context', '8B embeddings'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-embedding-8B',
  github: 'https://github.com/zenlm/zen-embedding',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-embeddings-retrieval.pdf',
  aliases: [],
}

export const zenEmbedding4B: ZenModel = {
  id: 'zen-embedding-4b',
  name: 'Zen Embedding 4B',
  fullName: 'Zen Embedding 4B',
  description: '4B text-embedding model for dense retrieval. Open-weight repackage of Qwen/Qwen3-Embedding-4B (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'embedding',
  modalities: ['embedding'],
  spec: { params: '4B', activeParams: null, context: 40_960, arch: 'Embedding' },
  pricing: null,
  features: ['40K context', '4B embeddings'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-embedding-4B',
  github: 'https://github.com/zenlm/zen-embedding',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-embeddings-retrieval.pdf',
  aliases: [],
}

export const zenEmbedding06B: ZenModel = {
  id: 'zen-embedding-0.6b',
  name: 'Zen Embedding 0.6B',
  fullName: 'Zen Embedding 0.6B',
  description: '0.6B text-embedding model for high-throughput retrieval. Open-weight repackage of Qwen/Qwen3-Embedding-0.6B (Apache-2.0).',
  generation: 'foundation',
  tier: 'mini',
  category: 'embedding',
  modalities: ['embedding'],
  spec: { params: '0.6B', activeParams: null, context: 32_768, arch: 'Embedding' },
  pricing: null,
  features: ['32K context', '0.6B embeddings'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-embedding-0.6B',
  github: 'https://github.com/zenlm/zen-embedding',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-embeddings-retrieval.pdf',
  aliases: [],
}

export const zenReranker8B: ZenModel = {
  id: 'zen-reranker-8b',
  name: 'Zen Reranker 8B',
  fullName: 'Zen Reranker 8B',
  description: '8B cross-encoder reranker for search relevance. Open-weight repackage of Qwen/Qwen3-Reranker-8B (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'embedding',
  modalities: ['embedding'],
  spec: { params: '8B', activeParams: null, context: 40_960, arch: 'Reranker' },
  pricing: null,
  features: ['40K context', '8B reranker'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-reranker-8B',
  github: 'https://github.com/zenlm/zen-reranker',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-reranker.pdf',
  aliases: [],
}

export const zenReranker4B: ZenModel = {
  id: 'zen-reranker-4b',
  name: 'Zen Reranker 4B',
  fullName: 'Zen Reranker 4B',
  description: '4B cross-encoder reranker for search relevance. Open-weight repackage of Qwen/Qwen3-Reranker-4B (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'embedding',
  modalities: ['embedding'],
  spec: { params: '4B', activeParams: null, context: 40_960, arch: 'Reranker' },
  pricing: null,
  features: ['40K context', '4B reranker'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-reranker-4B',
  github: 'https://github.com/zenlm/zen-reranker',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-reranker.pdf',
  aliases: [],
}

export const zenReranker06B: ZenModel = {
  id: 'zen-reranker-0.6b',
  name: 'Zen Reranker 0.6B',
  fullName: 'Zen Reranker 0.6B',
  description: '0.6B cross-encoder reranker for high-throughput reranking. Open-weight repackage of Qwen/Qwen3-Reranker-0.6B (Apache-2.0).',
  generation: 'foundation',
  tier: 'mini',
  category: 'embedding',
  modalities: ['embedding'],
  spec: { params: '0.6B', activeParams: null, context: 40_960, arch: 'Reranker' },
  pricing: null,
  features: ['40K context', '0.6B reranker'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-reranker-0.6B',
  github: 'https://github.com/zenlm/zen-reranker',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-reranker.pdf',
  aliases: [],
}

// ---------------------------------------------------------------------------
// Open-weight media models (HuggingFace)
// ---------------------------------------------------------------------------

export const zen3Image: ZenModel = {
  id: 'zen3-image',
  name: 'Zen3 Image',
  fullName: 'Zen3 Image',
  description: 'Text-to-image diffusion model. Open-weight repackage of Qwen/Qwen-Image (Apache-2.0).',
  generation: 'zen3',
  tier: 'standard',
  category: 'image',
  modalities: ['vision'],
  spec: { params: null, activeParams: null, context: 0, arch: 'Diffusion' },
  pricing: null,
  features: ['Text-to-image', 'Open weights'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen3-image',
  github: null,
  paper: null,
  aliases: [],
}

export const zen3Tts: ZenModel = {
  id: 'zen3-tts',
  name: 'Zen3 TTS',
  fullName: 'Zen3 TTS',
  description:
    'Text-to-speech model, ~1.7B, 12 Hz codec, multilingual synthesis. Fine-tuned from Qwen/Qwen3-TTS-12Hz-1.7B-Base (Apache-2.0).',
  generation: 'zen3',
  tier: 'standard',
  category: 'audio',
  modalities: ['audio'],
  spec: { params: '1.7B', activeParams: null, context: 0, arch: 'TTS' },
  pricing: null,
  features: ['12 Hz codec', 'Multilingual', 'Open weights'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen3-tts',
  github: null,
  paper: null,
  aliases: [],
}

export const zen3Asr: ZenModel = {
  id: 'zen3-asr',
  name: 'Zen3 ASR',
  fullName: 'Zen3 ASR',
  description:
    'Speech-recognition model, ~1.7B, 24-layer audio encoder feeding a Qwen3 decoder; 30 languages. Fine-tuned from Qwen/Qwen3-ASR-1.7B (Apache-2.0).',
  generation: 'zen3',
  tier: 'standard',
  category: 'audio',
  modalities: ['audio', 'text'],
  spec: { params: '1.7B', activeParams: null, context: 0, arch: 'ASR' },
  pricing: null,
  features: ['30 languages', 'Streaming', 'Open weights'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen3-asr',
  github: null,
  paper: null,
  aliases: [],
}

export const zenMusician: ZenModel = {
  id: 'zen-musician',
  name: 'Zen Musician',
  fullName: 'Zen Musician',
  description: 'Text-to-music model, 7B autoregressive. Repackage of m-a-p/YuE-s1-7B-anneal-en-cot (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'audio',
  modalities: ['audio'],
  spec: { params: '7B', activeParams: null, context: 0, arch: 'Dense' },
  pricing: null,
  features: ['Text-to-music', 'Open weights'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-musician',
  github: 'https://github.com/zenlm/zen-musician',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-musician.pdf',
  aliases: [],
}

// ---------------------------------------------------------------------------
// Open-weight agent & domain verticals (HuggingFace)
// ---------------------------------------------------------------------------

export const zenAgent4b: ZenModel = {
  id: 'zen-agent-4b',
  name: 'Zen Agent 4B',
  fullName: 'Zen Agent 4B',
  description:
    'Agent / tool-use model, 4B dense. Open-weight repackage of Qwen/Qwen3-4B (Apache-2.0); shares the Qwen3-4B lineage with zen-eco, tuned for multi-step tool use.',
  generation: 'foundation',
  tier: 'mini',
  category: 'agents',
  modalities: ['text', 'code'],
  spec: { params: '4B', activeParams: null, context: 262_144, arch: 'Dense' },
  pricing: null,
  features: ['262K context', 'Tool use', '4B dense'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-agent-4b',
  github: null,
  paper: 'https://github.com/zenlm/papers/blob/main/zen-agent.pdf',
  aliases: [],
}

export const zenRouter: ZenModel = {
  id: 'zen-router',
  name: 'Zen Router',
  fullName: 'Zen Router — 0.6B Routing',
  description:
    'Tiny routing model: reads a prompt and picks the best model to answer it. One forward pass emits a task class, a route distribution over the model catalog, and a feature embedding.',
  generation: 'foundation',
  tier: 'mini',
  category: 'agents',
  modalities: ['text'],
  spec: { params: '0.6B', activeParams: null, context: 32_000, arch: 'Dense' },
  pricing: null,
  features: ['Encoder-pooled router', 'Task + route + feature heads', '<50ms CPU / <10ms Metal @ Q4'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-router',
  github: 'https://github.com/zenlm/zen-router',
  paper: null,
  aliases: [],
}

export const zenMedical: ZenModel = {
  id: 'zen-medical',
  name: 'Zen Medical',
  fullName: 'Zen Medical',
  description: 'Medical-domain text model, 32B dense. Fine-tune of zen-pro (Qwen3-32B lineage, Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'vertical',
  modalities: ['text'],
  spec: { params: '32B', activeParams: null, context: 40_960, arch: 'Dense' },
  pricing: null,
  features: ['40K context', 'Medical domain'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-medical',
  github: null,
  paper: 'https://github.com/zenlm/papers/blob/main/zen-medical.pdf',
  aliases: [],
}

export const zenLegal: ZenModel = {
  id: 'zen-legal',
  name: 'Zen Legal',
  fullName: 'Zen Legal',
  description: 'Legal-domain text model, 32B dense. Fine-tune of zen-pro (Qwen3-32B lineage, Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'vertical',
  modalities: ['text'],
  spec: { params: '32B', activeParams: null, context: 40_960, arch: 'Dense' },
  pricing: null,
  features: ['40K context', 'Legal domain'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-legal',
  github: null,
  paper: 'https://github.com/zenlm/papers/blob/main/zen-legal-ai.pdf',
  aliases: [],
}

export const zenFinance: ZenModel = {
  id: 'zen-finance',
  name: 'Zen Finance',
  fullName: 'Zen Finance',
  description: 'Finance-domain text model, 32B dense. Fine-tune of zen-pro (Qwen3-32B lineage, Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'vertical',
  modalities: ['text'],
  spec: { params: '32B', activeParams: null, context: 40_960, arch: 'Dense' },
  pricing: null,
  features: ['40K context', 'Finance domain'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-finance',
  github: null,
  paper: 'https://github.com/zenlm/papers/blob/main/zen-financial-ai.pdf',
  aliases: [],
}

export const zenSql: ZenModel = {
  id: 'zen-sql',
  name: 'Zen SQL',
  fullName: 'Zen SQL',
  description: 'Text-to-SQL model, 32B dense. Fine-tune of zen-pro (Qwen3-32B lineage, Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'vertical',
  modalities: ['text', 'code'],
  spec: { params: '32B', activeParams: null, context: 40_960, arch: 'Dense' },
  pricing: null,
  features: ['40K context', 'Text-to-SQL'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-sql',
  github: null,
  paper: null,
  aliases: [],
}

export const zenTranslate: ZenModel = {
  id: 'zen-translate',
  name: 'Zen Translate',
  fullName: 'Zen Translate',
  description: 'Translation model, 32B dense. Fine-tune of zen-pro (Qwen3-32B lineage, Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'vertical',
  modalities: ['text'],
  spec: { params: '32B', activeParams: null, context: 40_960, arch: 'Dense' },
  pricing: null,
  features: ['40K context', 'Translation'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-translate',
  github: null,
  paper: null,
  aliases: [],
}

export const zenMultilingual: ZenModel = {
  id: 'zen-multilingual',
  name: 'Zen Multilingual',
  fullName: 'Zen Multilingual',
  description: 'Multilingual text model, 32B dense. Fine-tune of zen-pro (Qwen3-32B lineage, Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'vertical',
  modalities: ['text'],
  spec: { params: '32B', activeParams: null, context: 40_960, arch: 'Dense' },
  pricing: null,
  features: ['40K context', 'Multilingual'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-multilingual',
  github: null,
  paper: 'https://github.com/zenlm/papers/blob/main/zen-multilingual.pdf',
  aliases: [],
}

// ---------------------------------------------------------------------------
// Open-weight creative / media studio (HuggingFace)
// ---------------------------------------------------------------------------

export const zenWorld: ZenModel = {
  id: 'zen-world',
  name: 'Zen World',
  fullName: 'Zen World',
  description: 'Text-to-video diffusion model, 14B. Open-weight repackage of Wan-AI/Wan2.1-T2V-14B (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'video',
  modalities: ['video'],
  spec: { params: '14B', activeParams: null, context: 0, arch: 'Diffusion' },
  pricing: null,
  features: ['Text-to-video', '14B diffusion'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-world',
  github: 'https://github.com/zenlm/zen-world',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-world.pdf',
  aliases: [],
}

export const zenDirector: ZenModel = {
  id: 'zen-director',
  name: 'Zen Director',
  fullName: 'Zen Director',
  description: 'Text + image to video diffusion model, 5B. Open-weight repackage of Wan-AI/Wan2.2-TI2V-5B (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'video',
  modalities: ['vision', 'video'],
  spec: { params: '5B', activeParams: null, context: 0, arch: 'Diffusion' },
  pricing: null,
  features: ['Text + image to video', '5B diffusion'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-director',
  github: 'https://github.com/zenlm/zen-director',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-director.pdf',
  aliases: [],
}

export const zenImageEdit: ZenModel = {
  id: 'zen-image-edit',
  name: 'Zen Image Edit',
  fullName: 'Zen Image Edit',
  description: 'Instruction-based image editing diffusion model. Open-weight repackage of Qwen/Qwen-Image-Edit-2509 (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'image',
  modalities: ['vision'],
  spec: { params: null, activeParams: null, context: 0, arch: 'Diffusion' },
  pricing: null,
  features: ['Image editing', 'Open weights'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-image-edit',
  github: null,
  paper: null,
  aliases: [],
}

export const zen3d: ZenModel = {
  id: 'zen-3d',
  name: 'Zen 3D',
  fullName: 'Zen 3D',
  description: 'Image-to-3D asset generation model. Open-weight repackage of JeffreyXiang/TRELLIS-image-large (MIT).',
  generation: 'foundation',
  tier: 'standard',
  category: 'spatial',
  modalities: ['vision', '3d'],
  spec: { params: null, activeParams: null, context: 0, arch: 'Diffusion' },
  pricing: null,
  features: ['Image-to-3D', 'Open weights'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-3d',
  github: 'https://github.com/zenlm/zen-3d',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-3d.pdf',
  aliases: [],
}

export const zenDubLive: ZenModel = {
  id: 'zen-dub-live',
  name: 'Zen Dub Live',
  fullName: 'Zen Dub Live',
  description: 'Live dubbing / text-to-speech model. Fine-tuned from the Qwen3-TTS family (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'audio',
  modalities: ['audio'],
  spec: { params: null, activeParams: null, context: 0, arch: 'TTS' },
  pricing: null,
  features: ['Live dubbing', 'Text-to-speech'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-dub-live',
  github: 'https://github.com/zenlm/zen-dub-live',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-dub-live_whitepaper.pdf',
  aliases: [],
}

export const zenDesignerInstruct: ZenModel = {
  id: 'zen-designer-235b-a22b-instruct',
  name: 'Zen Designer 235B Instruct',
  fullName: 'Zen Designer 235B A22B Instruct',
  description:
    'Vision-language design model, 235B total / 22B active MoE. Open-weight repackage of Qwen/Qwen3-VL-235B-A22B-Instruct (Apache-2.0).',
  generation: 'foundation',
  tier: 'pro',
  category: 'vision',
  modalities: ['text', 'vision'],
  spec: { params: '235B', activeParams: '22B', context: 131_072, arch: 'MoE Vision-Language' },
  pricing: null,
  features: ['131K context', 'Text + vision', 'MoE 235B/22B active'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-designer-235b-a22b-instruct',
  github: 'https://github.com/zenlm/zen-designer-instruct',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-designer-instruct_whitepaper.pdf',
  aliases: [],
}

export const zenDesignerThinking: ZenModel = {
  id: 'zen-designer-235b-a22b-thinking',
  name: 'Zen Designer 235B Thinking',
  fullName: 'Zen Designer 235B A22B Thinking',
  description:
    'Reasoning vision-language design model, 235B total / 22B active MoE. Open-weight repackage of Qwen/Qwen3-VL-235B-A22B-Thinking (Apache-2.0).',
  generation: 'foundation',
  tier: 'pro',
  category: 'vision',
  modalities: ['text', 'vision'],
  spec: { params: '235B', activeParams: '22B', context: 131_072, arch: 'MoE Vision-Language' },
  pricing: null,
  features: ['131K context', 'Text + vision', 'Reasoning'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-designer-235b-a22b-thinking',
  github: 'https://github.com/zenlm/zen-designer-thinking',
  paper: 'https://github.com/zenlm/papers/blob/main/zen-designer-thinking_whitepaper.pdf',
  aliases: [],
}

export const zenDesignerGguf: ZenModel = {
  id: 'zen-designer-gguf',
  name: 'Zen Designer GGUF',
  fullName: 'Zen Designer GGUF',
  description:
    'GGUF build of Zen Designer for local runs, 235B total / 22B active MoE. Repackage of Qwen/Qwen3-VL-235B-A22B-Instruct (Apache-2.0).',
  generation: 'foundation',
  tier: 'standard',
  category: 'vision',
  modalities: ['text', 'vision'],
  spec: { params: '235B', activeParams: '22B', context: 131_072, arch: 'MoE Vision-Language' },
  pricing: null,
  features: ['GGUF weights', 'Text + vision', 'MoE 235B/22B active'],
  status: 'available',
  huggingface: 'https://huggingface.co/zenlm/zen-designer-gguf',
  github: 'https://github.com/zenlm/zen-designer',
  paper: null,
  aliases: [],
}

// ---------------------------------------------------------------------------
// Collections
// ---------------------------------------------------------------------------

/** All Zen models — the canonical list. */
export const allModels: ZenModel[] = [
  // Zen5 flagship / code
  zen5, zen5Mini, zen5Coder, zen5Pro, zen5Max,
  // Zen3 multimodal / vision / safety
  zen3Omni, zen3Vl, zen3Guard,
  // Embedding & reranking endpoints
  zen5Embedding, zen3Embedding, zenRerank,
  // Media generation endpoints
  zenImage, zenVoice, zenMusic, zenFoley, zenVideo,
  // Open-weight text
  zen3Nano, zenNano, zenEco,
  // Open-weight embeddings & rerankers
  zenEmbedding8B, zenEmbedding4B, zenEmbedding06B,
  zenReranker8B, zenReranker4B, zenReranker06B,
  // Open-weight media
  zen3Image, zen3Tts, zen3Asr, zenMusician,
  // Open-weight agent, routing & domain verticals
  zenAgent4b, zenRouter, zenMedical, zenLegal, zenFinance, zenSql, zenTranslate, zenMultilingual,
  // Open-weight creative / media studio
  zenWorld, zenDirector, zenImageEdit, zen3d, zenDubLive,
  zenDesignerInstruct, zenDesignerThinking, zenDesignerGguf,
]

/** Served API models (have retail pricing). */
export const apiModels: ZenModel[] = allModels.filter(m => m.pricing !== null)

/** Open-weight models (available on HuggingFace). */
export const localModels: ZenModel[] = allModels.filter(m => m.huggingface !== null)

/** Models by generation. */
export const zen5Models: ZenModel[] = allModels.filter(m => m.generation === 'zen5')
export const zen3Models: ZenModel[] = allModels.filter(m => m.generation === 'zen3')
export const foundationModels: ZenModel[] = allModels.filter(m => m.generation === 'foundation')

/** Lookup by ID (and alias). */
export const modelById = new Map<string, ZenModel>(
  allModels.flatMap(m => [[m.id, m] as const, ...m.aliases.map(a => [a, m] as const)])
)

/** Get model by ID or alias. */
export function getModel(id: string): ZenModel | undefined {
  return modelById.get(id)
}
