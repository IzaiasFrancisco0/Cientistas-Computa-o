import React from 'react'

function Cards(){
    const perfil = [
        {
            id: 1,
            nome: "Alan Turing",
            idade: 28,
            Conquista: 'Pioneiro da computação',
            Descricao: 'Ele é amplamente considerado uma das figuras mais influentes no desenvolvimento da ciência da computação e da inteligência artificial.',
            img: 'https://th.bing.com/th/id/OIP.8EdyrdZ5hkgDprYf_UKN9AHaHh?rs=1&pid=ImgDetMain',
        },
        {
            id: 2,
            nome: 'James Gosling',
            idade: 54,
            Conquista: 'Criador da linguagem Java',
            Descricao: 'é um cientista da computação canadense, mais conhecido como o criador da linguagem de programação Java.',
            img: 'https://th.bing.com/th/id/R.3f4ed926245f82b5163b4d19b17badcd?rik=8puoE9M0WfKDhw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-4FtuK--4W_U%2fTVrl6WJvn4I%2fAAAAAAAAAEw%2fvvBUnpkKPQM%2fs320%2fgosling%2bfull.jpg&ehk=hS1xdoP5Dn4RtBgEEPXgFYWudam%2bd6tI7eelfaco9Pw%3d&risl=&pid=ImgRaw&r=0',

        },
        {
            id: 3,
            nome: 'Linus Torvalds',
            idade: 54,
            Conquista: 'Criador do linux',
            Descricao: 'conhecido por iniciar o desenvolvimento do kernel Linux, que é o componente principal do sistema operacional Linux (SO).',
            img: 'https://th.bing.com/th/id/R.c68f16da649390637130ea99745f87e6?rik=yJiEtjd0k46WKQ&pid=ImgRaw&r=0',
            
        },
        {
            id: 4,
            nome: 'Grace Hooper',
            idade: 54,
            Conquista: 'Criadora da linguagem COBOL',
            Descricao: ' o desenvolvimento da linguagem de programação COBOL, e sua defesa de linguagens de programação independentes de máquina.',
            img: 'https://th.bing.com/th/id/R.a97f8a16193e1a007dd2be832a8219a0?rik=nREjX8p0nYfGpA&pid=ImgRaw&r=0',
            
        },
        {
            id: 5,
            nome: 'Jhon von Neumann',
            idade: 54,
            Conquista: 'Matématico, fisico e teorico',
            Descricao: 'Ele fez contribuições fundamentais para uma ampla gama de campos, incluindo matemática, física, economia e ciência da computação.',
            img: 'https://th.bing.com/th/id/OIP.P7YdzLsf4dMEJLdnhkLTQgHaHj?rs=1&pid=ImgDetMain',
            
        },
        {
            id: 6,
            nome: 'Donald Knuth',
            idade: 54,
            Conquista: 'Autor de The Art of Computer',
            Descricao: 'Knuth teve um profundo impacto na ciência da computação através de seus escritos, ensinamentos e a criação de sistemas de software influentes.',
            img: 'https://th.bing.com/th/id/R.c68bd27066927c09e90a58aa2484c445?rik=faGQeHMpfGcPqg&riu=http%3a%2f%2fwww.computersciencedegreehub.com%2fwp-content%2fuploads%2f2014%2f10%2fdonald-knuth.jpg&ehk=DLPALxwtt%2bb3pjjuVlyj27oTFcmuvSvAjJUs%2bj6fLjw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
            
        },
        {
            id: 7,
            nome: 'Tim Berners Lee',
            idade: 54,
            Conquista: 'Inventor da World Wide Web',
            Descricao: 'Berners-Lee desenvolveu as tecnologias e protocolos fundamentais que sustentam a internet moderna enquanto trabalhava no CERN',
            img: 'https://th.bing.com/th/id/R.af818ce716b8f7aab0b5365737e1083b?rik=0FWcZxwWAKo1ZQ&riu=http%3a%2f%2fwww.atlanticspeakerbureau.com%2fimages%2fdb%2fi5978abb280a85.jpg&ehk=%2fXaHlz5EF5Yu4uS3T%2fKrzyrimq%2bXnARFSWIQER8PJt0%3d&risl=&pid=ImgRaw&r=0',
            
        },
        {
            id: 8,
            nome: 'Mark Zuckerberg',
            idade: 54,
            Conquista: 'Criador do facebook',
            Descricao: 'Zuckerberg mostrou um interesse inicial em programação de computadores e desenvolveu vários aplicativos de software enquanto frequentava a Universidade de Harvard.',
            img: 'https://th.bing.com/th/id/OIP.FOz1jcwy-g9pQY2Qq3GcXQHaHa?rs=1&pid=ImgDetMain',
            
        }

    ]
    return (
<div className="principal">
{
    perfil.map((item, index) => {
        return ( 
            
        <div key={index} className="cards">
         <img src={item.img} alt={item.nome} />
         <div className="info">
            <h2>{item.nome}</h2>
            <p><span>Conquista:</span> {item.Conquista}</p>
            <p><span>Descrição:</span> {item.Descricao}</p>
         </div>
        
        </div>
       
        )
})}
</div>
 
);
}

export default Cards;