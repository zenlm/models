/**
 * @zenlm/models — Canonical type definitions for the Zen model family.
 *
 * There should be one — and preferably only one — obvious place to define these.
 */

/** Numbered model generation. `foundation` is the bare-brand base line. */
export type ModelGeneration = 'zen3' | 'zen5' | 'foundation'

/** Positioning within a line, smallest to largest. */
export type ModelTier = 'mini' | 'standard' | 'pro' | 'max'

/** Real architecture family — no euphemisms. */
export type ModelArchitecture =
  | 'Dense'
  | 'MoE'
  | 'MoE Vision-Language'
  | 'Embedding'
  | 'Reranker'
  | 'Diffusion'
  | 'TTS'
  | 'ASR'

export type ModelCategory =
  | 'flagship'
  | 'code'
  | 'vision'
  | 'image'
  | 'audio'
  | 'video'
  | 'safety'
  | 'embedding'
  | 'vertical'
  | 'agents'
  | 'spatial'

export type ModelModality =
  | 'text'
  | 'code'
  | 'math'
  | 'vision'
  | 'audio'
  | 'video'
  | 'safety'
  | 'embedding'
  | '3d'

/** `available` ⇒ open weights on HuggingFace. `cloud-only` ⇒ served via API, no public weights. */
export type ModelStatus = 'available' | 'cloud-only'

export interface ModelPricing {
  /** Cost per 1M input tokens in USD — or per-unit price for media SKUs */
  input: number
  /** Cost per 1M output tokens in USD — or per-unit price for media SKUs */
  output: number
  /** Cost per 1M cached read tokens (null if not supported) */
  cacheRead: number | null
  /** Cost per 1M cached write tokens (null if not supported) */
  cacheWrite: number | null
}

export interface ModelSpec {
  /** Total parameters (e.g., "80B", "8B") — null when not publicly specified */
  params: string | null
  /** Active parameters for MoE models (e.g., "3B") — null for dense models */
  activeParams: string | null
  /** Context window in tokens (0 for media models without a token context) */
  context: number
  /** Architecture family */
  arch: ModelArchitecture
}

export interface ZenModel {
  /** Model ID used in API calls (e.g., "zen5", "zen5-coder") */
  id: string
  /** Display name (e.g., "Zen5", "Zen5 Coder") */
  name: string
  /** Full display name (e.g., "Zen5 Coder") */
  fullName: string
  /** Short factual description */
  description: string
  /** Model generation */
  generation: ModelGeneration
  /** Positioning tier */
  tier: ModelTier
  /** Primary category */
  category: ModelCategory
  /** Supported modalities */
  modalities: ModelModality[]
  /** Technical specifications */
  spec: ModelSpec
  /** API pricing (null for open-weight artifacts not served as retail SKUs) */
  pricing: ModelPricing | null
  /** Key feature bullets */
  features: string[]
  /** Model status */
  status: ModelStatus
  /** HuggingFace URL (null if no public weights) */
  huggingface: string | null
  /** GitHub URL (null if none) */
  github: string | null
  /** Technical paper / report URL (null if none) */
  paper: string | null
  /** Brand aliases (e.g., zen → zen5) */
  aliases: string[]
}

/**
 * Model family grouping for display.
 */
export interface ModelFamily {
  /** Family ID */
  id: string
  /** Display name */
  name: string
  /** Description */
  description: string
  /** Icon name (lucide icon) */
  icon: string
  /** Member model IDs */
  models: string[]
}
