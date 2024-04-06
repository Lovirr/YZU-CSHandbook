---
layout: home
footer: false
hero:
  text: "Contributors"
  tagline: "本项目所有贡献者"
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.lovir.cn/IMAGE/avater-rounded.jpg',
    name: 'Lovir',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/Lovirr' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members="members" />
