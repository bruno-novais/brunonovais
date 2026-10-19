export type Project = {
  id: string
  title: string
  category: string
  intro: string
  description: string
  year: string
  className: string
  tags: string[]
}

export const projects: Project[] = [
  { id: 'adesivos-identidade-aniversario', title: 'Adesivos e Identidade Visual para Aniversário', category: 'Identidade Visual', intro: 'Uma identidade alegre, memorável e feita para celebrar.', description: 'Sistema visual completo para uma festa de aniversário, com adesivos, elementos gráficos e uma linguagem consistente em cada detalhe.', year: '2024', className: 'project-lime', tags: ['Branding', 'Print', 'Direção de arte'] },
  { id: 'previsao-tempo', title: 'Previsão do Tempo Intuitiva e em Tempo Real', category: 'UI/UX Design', intro: 'Informação meteorológica transformada em clareza.', description: 'Experiência digital que organiza dados do clima em uma interface rápida, acessível e intuitiva para decisões do dia a dia.', year: '2024', className: 'project-blue', tags: ['Produto digital', 'UI/UX', 'Prototipação'] },
  { id: 'packshot-red-bull', title: 'Packshot Red Bull', category: '3D Design · CGI', intro: 'Energia, volume e movimento em uma única imagem.', description: 'Estudo de iluminação e composição 3D para destacar o produto com uma direção visual intensa e contemporânea.', year: '2023', className: 'project-red', tags: ['Blender', 'CGI', 'Art direction'] },
  { id: 'packshot-perfume-masculino', title: 'Packshot Perfume Masculino', category: '3D Design · Art Direction', intro: 'Sofisticação construída com luz, forma e matéria.', description: 'Packshot de perfume masculino com foco em materiais, reflexos controlados e uma atmosfera premium.', year: '2023', className: 'project-purple', tags: ['3D', 'Produto', 'Render'] },
  { id: 'landing-page-lupus', title: 'Landing Page Educacional Lúpus', category: 'Web Design · UI/UX', intro: 'Educação em saúde com empatia e navegação simples.', description: 'Landing page educacional desenvolvida para tornar informações sobre lúpus mais claras, acolhedoras e fáceis de encontrar.', year: '2022', className: 'project-blue', tags: ['Web design', 'Conteúdo', 'Acessibilidade'] },
  { id: 'packshot-perfume-feminino', title: 'Packshot Perfume Feminino', category: '3D Design · CGI', intro: 'Delicadeza com presença e uma assinatura visual marcante.', description: 'Exploração visual de um packshot feminino, combinando composição, cor e iluminação para valorizar a embalagem.', year: '2022', className: 'project-lime', tags: ['Cinema 4D', 'Produto', 'Composição'] },
]
