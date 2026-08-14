/**
 * @zenlm/models — Model family groupings for display purposes.
 */

import type { ModelFamily } from './types'

export const families: ModelFamily[] = [
  {
    id: 'zen5',
    name: 'Zen 5',
    description: 'Flagship generation — sparse mixture-of-experts for text, code, and math.',
    icon: 'Rocket',
    models: ['zen5', 'zen5-mini', 'zen5-coder', 'zen5-pro', 'zen5-max'],
  },
  {
    id: 'zen3',
    name: 'Zen 3',
    description: 'Multimodal, vision-language, and safety models.',
    icon: 'Eye',
    models: ['zen3-omni', 'zen3-vl', 'zen3-guard'],
  },
  {
    id: 'code',
    name: 'Code',
    description: 'Code generation, review, and agentic programming.',
    icon: 'Code',
    models: ['zen5-coder'],
  },
  {
    id: 'vision',
    name: 'Vision',
    description: 'Vision-language and multimodal understanding.',
    icon: 'Eye',
    models: ['zen3-omni', 'zen3-vl'],
  },
  {
    id: 'embedding',
    name: 'Embedding & Retrieval',
    description: 'Text embeddings and reranking — served endpoints and open weights.',
    icon: 'Search',
    models: [
      'zen5-embedding', 'zen3-embedding', 'zen-rerank',
      'zen-embedding-8b', 'zen-embedding-4b', 'zen-embedding-0.6b',
      'zen-reranker-8b', 'zen-reranker-4b', 'zen-reranker-0.6b',
    ],
  },
  {
    id: 'image',
    name: 'Image Generation',
    description: 'Text-to-image and image editing diffusion — served endpoint and open weights.',
    icon: 'Image',
    models: ['zen-image', 'zen3-image', 'zen-image-edit'],
  },
  {
    id: 'audio',
    name: 'Audio & Speech',
    description: 'Text-to-speech, text-to-music, sound effects, speech recognition, and dubbing.',
    icon: 'Mic',
    models: ['zen-voice', 'zen-music', 'zen-foley', 'zen3-tts', 'zen3-asr', 'zen-musician', 'zen-dub-live'],
  },
  {
    id: 'video',
    name: 'Video Generation',
    description: 'Text-to-video and image-to-video diffusion.',
    icon: 'Video',
    models: ['zen-video', 'zen-world', 'zen-director'],
  },
  {
    id: 'safety',
    name: 'Safety',
    description: 'Content moderation and safety classification.',
    icon: 'Shield',
    models: ['zen3-guard'],
  },
  {
    id: 'foundation',
    name: 'Foundation (Open Weights)',
    description: 'General-purpose open-weight text models.',
    icon: 'Brain',
    models: ['zen3-nano', 'zen-eco', 'zen-nano'],
  },
  {
    id: 'agents',
    name: 'Agents',
    description: 'Open-weight models tuned for tool use and multi-step planning.',
    icon: 'Bot',
    models: ['zen-agent-4b', 'zen-router'],
  },
  {
    id: 'verticals',
    name: 'Domain Verticals',
    description: 'Domain-specialized open-weight text models.',
    icon: 'Briefcase',
    models: ['zen-medical', 'zen-legal', 'zen-finance', 'zen-sql', 'zen-translate', 'zen-multilingual'],
  },
  {
    id: 'creative',
    name: 'Creative Studio',
    description: 'Open-weight video, image editing, 3D, dubbing, and design models.',
    icon: 'Palette',
    models: [
      'zen-world', 'zen-director', 'zen-image-edit', 'zen-3d', 'zen-dub-live',
      'zen-designer-235b-a22b-instruct', 'zen-designer-235b-a22b-thinking', 'zen-designer-gguf',
    ],
  },
]
