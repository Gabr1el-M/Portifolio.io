import React, { useState } from 'react';
import style from '../styles/list.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const List = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const toggleList2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleList3 = () => {
        setIsOpen3(!isOpen3);
    };

    const toggleList4 = () => {
        setIsOpen4(!isOpen4);
    };

    const toggleList5 = () => {
        setIsOpen5(!isOpen5);
    };

    const toggleList6 = () => {
        setIsOpen6(!isOpen6);
    };

    return (
        <ol className={style.container}>
            <li className={style.item} onClick={toggleList}>
                Comunicação efetiva
                {isOpen && (
                    <ul className={style.sublist}>
                        <li>A capacidade de se comunicar de forma clara e concisa é essencial para colaborar com membros da equipe, clientes e partes interessadas. Um bom desenvolvedor front-end precisa ser capaz de expressar suas ideias, entender requisitos e fornecer atualizações de progresso de maneira eficaz.</li>
                    </ul>
                )}
            </li>
            <li className={style.item} onClick={toggleList2}>
                Pensamento analítico
                {isOpen2 && (
                    <ul className={style.sublist}>
                        <li>Desenvolvedores front-end precisam ter habilidades analíticas sólidas para analisar problemas complexos, depurar código e encontrar soluções eficientes. O pensamento analítico permite que você desmonte problemas em partes menores, identifique padrões e tome decisões informadas.</li>
                    </ul>
                )}
            </li>
            <li className={style.item} onClick={toggleList3}>
                Capacidade de aprender e se adaptar
                {isOpen3 && (
                    <ul className={style.sublist}>
                        <li>O desenvolvimento front-end está em constante evolução, com novas tecnologias e ferramentas surgindo regularmente. Ser capaz de aprender rapidamente e se adaptar às mudanças é uma habilidade crucial. Isso inclui acompanhar as últimas tendências, participar de treinamentos e estar disposto a explorar novas abordagens.</li>
                    </ul>
                )}
            </li>
            <li className={style.item} onClick={toggleList4}>
                Resolução de problemas
                {isOpen4 && (
                    <ul className={style.sublist}>
                        <li>Os desenvolvedores front-end muitas vezes enfrentam desafios técnicos e precisam ser capazes de resolvê-los de maneira eficaz. Ter habilidades sólidas de resolução de problemas envolve a capacidade de identificar a raiz do problema, explorar diferentes soluções e implementar a melhor abordagem para resolver o desafio.</li>
                    </ul>
                )}
            </li>
            <li className={style.item} onClick={toggleList5}>
                Colaboração e trabalho em equipe
                {isOpen5 && (
                    <ul className={style.sublist}>
                        <li> A capacidade de trabalhar bem em equipe é fundamental para um desenvolvedor front-end, pois geralmente eles trabalham em projetos em colaboração com designers, desenvolvedores de back-end e outras partes interessadas. Ser capaz de compartilhar ideias, receber feedback construtivo e colaborar efetivamente ajudará a construir produtos de alta qualidade.</li>
                    </ul>
                )}
            </li>
            <li className={style.item} onClick={toggleList6}>
                Atitude positiva
                {isOpen6 && (
                    <ul className={style.sublist}>
                        <li>Uma atitude positiva pode ter um impacto significativo em sua produtividade e no ambiente de trabalho. Lidar com prazos apertados e desafios técnicos pode ser estressante, mas uma abordagem positiva permite que você mantenha o foco, resolva problemas de maneira construtiva e motive-se a buscar soluções inovadoras.</li>
                    </ul>
                )}
            </li>
        </ol>
    );
};

export default List;