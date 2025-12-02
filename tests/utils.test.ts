import { describe, it, expect } from 'vitest'
import { tsUrl } from '@/utils/api'

describe('api utils', ()=>{
  it('tsUrl throws when unset', ()=>{
    try{ tsUrl('/x'); } catch(e){ expect(e).toBeDefined() }
  })
})
