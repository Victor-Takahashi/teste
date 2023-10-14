# Especificações do Projeto

 O MatchTime visa reunir jogadores em comunidades balanceadas com base em seus níveis de classificação no jogo, fornecer recursos de chat e voice chat, bem como a capacidade de participar de eventos e partidas públicas e privadas.
 
Os jogadores de jogos online muitas vezes enfrentam dificuldades em encontrar uma comunidade de jogadores com interesses e habilidades semelhantes. Isso resulta em experiências solitárias e partidas desequilibradas. Além disso, a comunicação entre jogadores é essencial, mas muitas vezes é limitada a aplicativos externos. O MatchTime visa resolver essa falta de comunicação e gerar encontros entre os gamers.

As tecnologias que serão utilizadas no fron-end são: HTML, CSS, Boostrap, Jquery. Já na parte do back-end será utilizado: JavaScript ou Json Server.


## Personas

João tem 22 anos é um jogador novato que recentemente começou a explorar o mundo dos jogos online. Ele não tem muita experiência em jogos e está animado para aprender e se juntar a diferentes comunidades de jogadores.

Lucas tem 24 anos e é um jogador altamente competitivo. Ele adora jogos de tiro em primeira pessoa e jogos de estratégia em equipe. Ele passa muitas horas por dia jogando e está sempre em busca de novos desafios. Ele quer competir em partidas de nível profissional e disputar campeonatos. Lucas procura um sistema de classificação confiável e partidas equilibradas para se manter no jogo. E tem como prioridade a fácil comunicação entre jogadores.

Ana é uma jogadora casual de 30 anos que gosta de jogos de tiro. Ela joga principalmente para relaxar e se divertir. Ana joga algumas vezes por semana e adora conhecer novas pessoas enquanto joga. Ana procura uma plataforma onde possa se unir a comunidades amigáveis, participar de eventos sociais e explorar novos jogos. Ana busca uma interface amigável, chat de texto e/ou voz para comunicação e a capacidade de encontrar jogadores com interesses semelhantes.

Miguel é um jogador de 28 anos que adora organizar torneios entre amigos. Miguel passa muito tempo jogando com vários amigos e vê a necessidade de incluir todos em suas partidas. Ele está sempre em busca de novos jogadores para participar de seus jogos personalizados. Miguel procura uma plataforma onde possa promover seus eventos, atrair participantes e manter suas comunidades de jogadores.

André tem 34 anos, é um administrador experiente que se dedica ao gerenciamento de comunidades de jogos online. Ele é apaixonado por jogos e acredita na importância de criar ambientes seguros e acolhedores para os jogadores. Como administrador no Matchtime, ele desempenha um papel vital na manutenção e no crescimento das comunidades dentro da plataforma.

Sofia tem 28 anos, é a especialista em suporte do Matchtime. Ela é apaixonada por ajudar os jogadores e administradores a resolverem problemas e fornecer um excelente atendimento ao cliente, já que Sofia é extremamente paciente e adora a interação com o usuário.

Marina tem 27 anos e é uma moderadora voluntária em várias comunidades online, principalmente dedicada a jogos. Ela é apaixonada por criar um ambiente amigável e inclusivo para os membros da comunidade e ajudar a manter a ordem nas discussões.

Luiz tem 22 anos, é um desenvolvedor e apaixonado pelo que faz na área de projetos. Ele é responsável por criar e aprimorar os recursos da plataforma, garantir que ela seja estável e inovadora. Ele está comprometido em melhorar a experiência dos jogadores e administradores.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Jogador Ativo    | Preciso de um local onde eu possa me conectar com pessoas do mundo todo e que me permita jogar partidas ranqueadas, casuais ou eventos. | Para ter e fazer amigos amigos ativos nos jogos |
|Jogador casual      | Necessito de uma comunidade amigável. Ferramentas de denúncia simplificadas. Partidas sociais sem preocupação de rank. | Não prejudicar jogadores competitivos e partidas de alto nível. |
|Jogador Competitivo       | Necessito de um cenário sério, focado em evoluir e tornar o jogo competitivo e desafiador. De uma plataforma séria que separe os players novos e experientes. Ferramentas de denúncia simplificadas. | Não gerar conflitos com novatos. Focar e jogar apenas com jogadores constantes e competitivamente sérios.|
|Gerente de Eventos     | Ferramentas de denúncia simplificadas. Quero criar eventos personalizados, abertos ao público com a finalidade de divulgar meu trabalho e demonstrar minha habilidade de gerenciar. | Proporcionar experiências diferentes aos usuários, fugindo da casualidade e monotonia dos padrões. |
|Suporte       | Estatísticas e análises detalhadas sobre a atividade da plataforma. Um sistema de relatórios de problemas e denúncias. A capacidade de monitorar e moderar as interações e conteúdos gerados pelos usuários. | Repassar as informações e necessidades dos players, retirar suas dúvidas e orientar sobre a plataforma. |
|Administração     | Estatísticas e análises detalhadas sobre a atividade da plataforma. Um sistema de relatórios de problemas e denúncias. A capacidade de monitorar e moderar as interações e conteúdos gerados pelos usuários.| Manter um ambiente seguro e amigável na plataforma, prevenindo comportamentos inadequados, spam ou discurso de ódio, e assegurando que as diretrizes da comunidade sejam seguidas. |
|Moderação    | Ferramentas e painel de moderação eficazes. Acesso a um histórico de ações dos usuários. Poder revisar e moderar postagens, comentários e mensagens privadas. | Remover conteúdo inadequado, banir usuários que violem as regras da comunidade e manter um ambiente amigável e respeitoso. |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Os gerentes de eventos devem poder criar eventos personalizados na plataforma. Isso é fundamental para permitir que os eventos sejam organizados. | ALTA | Italo Ritchello |
|RF-002| Os gerentes de eventos devem ser capazes de definir detalhes do evento, incluindo nome, data, hora, descrição e regras específicas. Isso é essencial para comunicar as informações básicas do evento aos participantes.   | ALTA |Pedro Matta |
|RF-003| Deve ser possível configurar as opções de adesão ao evento, decidindo se ele será aberto a todos ou apenas para membros selecionados. Isso é crítico para controlar quem pode participar. | ALTA | Italo Ritchello |
|RF-004| Os gerentes de eventos devem ter a capacidade de adicionar informações extras, como prêmios, categorias ou recompensas, para tornar o evento mais atraente. Isso melhora a atratividade do evento, mas pode ser implementado após os requisitos essenciais. | MEDIA | Pedro Matta |
|RF-005| Deve ser fácil compartilhar o evento com a comunidade e promovê-lo para atrair participantes. Isso é importante, mas pode ser tratado após a implementação dos recursos essenciais. | BAIXO | Italo Ritchello |
|RF-006| Cada usuário deve poder ter um perfil personalizável para exibir suas estatísticas, conquistas e preferências de jogos. | ALTA | Pedro Matta |
|RF-007| Implementar um sistema de classificação para avaliar a habilidade dos jogadores com base em seu desempenho nas partidas. | ALTA | Italo Ritchello |
|RF-008| Os jogadores devem poder participar de partidas competitivas, casuais e personalizadas, onde são agrupados com base em classificações e histórico de desempenho. | BAIXO | Pedro Matta |
|RF-009|Incluir fóruns de discussão e recursos de voice chat para facilitar a comunicação entre jogadores. Isso pode ser desenvolvido após a implementação dos recursos essenciais. | MEDIA | Italo Ritchello |
|RF-010| Implementar um sistema de convites que permite que os jogadores convidem amigos para partidas, grupos ou eventos. | MEDIA | Pedro Matta |
|RF-011| A plataforma deve disponibilizar uma área de denúncia para os usuários, acessível por meio de seus perfis ou durante partidas, permitindo que relatem comportamentos inadequados, toxicidade, assédio, discriminação ou qualquer outra violação das diretrizes da comunidade. |MEDIA| João Pedro |




  

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A plataforma deve ser altamente responsiva e rápida para fornecer uma experiência de usuário sem atrasos perceptíveis. | ALTA | 
|RNF-002| Os eventos devem ser seguros e protegidos contra fraudes ou abusos. Deve haver medidas de segurança para garantir que apenas os membros autorizados possam criar eventos. |  ALTA | 
|RNF-003| Planejar para que a plataforma seja escalável, capaz de lidar com um aumento significativo no número de usuários à medida que a comunidade cresce. |  MEDIA | 
|RNF-004| A interface de usuário deve ser intuitiva e amigável, permitindo que até mesmo jogadores menos experientes a utilizem com facilidade. |  MEDIA | 
|RNF-005| Garantir que a plataforma esteja disponível e acessível aos usuários sempre que necessário, minimizando tempos de inatividade. |  BAIXA | 
|RNF-006| Certificar-se de que a plataforma esteja em conformidade com as políticas de comportamento e regras de uso estabelecidas. |  BAIXA | 
|RNF-007| Implementar um sistema de backup e recuperação para proteger dados e informações em caso de falhas. |  BAIXA | 
|RNF-008| O sistema deve manter um registro de todas as denúncias de usuários, incluindo data, hora, descrição da denúncia e ação subsequente tomada pela moderação. Esse registro deve ser mantido com alta disponibilidade e segurança para fins de auditoria e transparência na gestão de comportamentos inadequados.| ALTA |
|RNF-009| A área de denúncia deve garantir a privacidade e confidencialidade dos denunciantes, protegendo suas informações pessoais.| MEDIA |
|RNF-010| A plataforma deve fornecer feedback aos denunciantes sobre o status de suas denúncias, como "em análise" ou "resolvida", para mantê-los informados sobre o progresso das investigações.|BAIXA|
|RNF-011| As denúncias enviadas pelos usuários devem ser encaminhadas para a equipe de moderação para avaliação e ação apropriada. |MEDIA|

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Adoção e Usuários Ativos                              |
|02| Conexão com Desenvolvedores de Jogos                  |
|03| Concorrência                                          |
|04| Remuneração patrocinada por anunciadores              |
|05| Compatibilidade com Jogos Existentes                  |
|06| Verificação constante do equilibrio entre players     |
|07| O projeto deverá ser entregue até o final do semestre |
|08| Não terá backend no projeto                           |
|09| Inicialmente somente em português                     |
|10|Classificação Etária                                   |

