export function getData(key) {
            // form data
            let form = {
                title: "Quest test",
                questions: [{
                    question: "quest test",
                    required: true,
                    answers: [
                        { text: "", points: null },
                        { text: "a boa", points: 0 },
                        { text: "a ruim", points: 1 }
                    ]
                }],
                results: [
                    { min: 0, max: 0, msg: "os bom" }
                ]
            };
    const obj = {
        "oswestry": {
            title: "Oswestry",
            questions: [{
                "question": "Intensidade da dor",
                "required": true, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "Sem dor no momento", "points": 0 },
                    { "text": "A dor é leve nesse momento", "points": 1 },
                    { "text": "A dor é moderada nesse momento", "points": 2 },
                    { "text": "A dor é mais ou menos intensa nesse momento", "points": 3 },
                    { "text": "A dor é muito forte nesse momento", "points": 4 },
                    { "text": "A dor é a pior imaginável nesse momento", "points": 5 }
                ]
            }, {
                "question": "Cuidados pessoais (vestir-se, tomar banho, etc)",
                "required": true, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "Eu posso cuidar de mim sem provocar dor extra", "points": 0 },
                    { "text": "Posso me cuidar mas me causa dor", "points": 1 },
                    { "text": "É doloroso me cuidar e sou lento e cuidadoso", "points": 2 },
                    { "text": "Preciso de alguma ajuda, mas dou conta de me cuidar", "points": 3 },
                    { "text": "Preciso de ajuda em todos os aspectos para cuidar de mim", "points": 4 },
                    { "text": "Eu não me visto, tomo banho com dificuldade e fico na cama", "points": 5 }
                ]
            }, {
                "question": "Pesos",
                "required": true, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "Posso levantar coisas pesadas sem causar dor extra.", "points": 1 },
                    { "text": "Se levantar coisas pesadas sinto dor extra.", "points": 0 },
                    { "text": "A dor me impede de levantar coisas pesadas, mas dou um jeito, se estão bem posicionadas, e.g., numa mesa.", "points": 2 },
                    { "text": "A dor me impede de levantar coisas pesadas mas dou um jeito de levantar coisas leves ou pouco pesadas se estiverem bem posicionadas.", "points": 3 },
                    { "text": "Só posso levantar coisas muito leves.", "points": 4 },
                    { "text": "Não posso levantar nem carregar nada.", "points": 5 }
                ]
            }, {
                "question": "Andar",
                "required": true, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "A dor não me impede de andar (qualquer distância)", "points": 0 },
                    { "text": "A dor me impede de andar mais de 1600 m (cerca de 16 quarteirões)", "points": 1 },
                    { "text": "A dor me impede de andar mais de 800 m (cerca de 8 quarteirões)", "points": 2 },
                    { "text": "A dor me impede de andar mais que poucos metros", "points": 3 },
                    { "text": "Só posso andar com bengala ou muleta", "points": 4 },
                    { "text": "Fico na cama a maior parte do tempo e tenho que arrastar para o banheiro.", "points": 5 }
                ]
            }, {
                "question": "Sentar",
                "required": true, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "Posso sentar em qualquer tipo de cadeira pelo tempo que quiser", "points": 0 },
                    { "text": "Posso sentar em minha cadeira favorita pelo tempo que quiser", "points": 1 },
                    { "text": "A dor me impede de sentar por mais de 1 hora", "points": 2 },
                    { "text": "A dor me impede de sentar por mais de meia hora", "points": 3 },
                    { "text": "A dor me impede de sentar por mais que 10 minutos", "points": 4 },
                    { "text": "A dor me impede de sentar", "points": 5 }
                ]
            }, {
                "question": "Ficar em pé",
                "required": true, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "Posso ficar de pé pelo tempo que quiser sem dor extra", "points": 0 },
                    { "text": "Posso ficar de pé pelo tempo que quiser, mas sinto um pouco de dor", "points": 1 },
                    { "text": "A dor me impede de ficar de pé por mais de 1h", "points": 2 },
                    { "text": "A dor me impede de ficar de pé por mais meia hora", "points": 3 },
                    { "text": "A dor me impede de ficar de pé por mais de 10 minutos", "points": 4 },
                    { "text": "A dor me impede de ficar de pé", "points": 5 }
                ]
            }, {
                "question": "Sono",
                "required": true, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "Meu sono não é perturbado por dor", "points": 0 },
                    { "text": "Algumas vezes meu sono é perturbado por dor", "points": 1 },
                    { "text": "Por causa da dor durmo menos de 6 horas", "points": 2 },
                    { "text": "Por causa da dor durmo menos de 4 horas", "points": 3 },
                    { "text": "Por causa da dor durmo menos de 2 horas", "points": 4 },
                    { "text": "A dor me impede de dormir.", "points": 5 }
                ]
            }, {
                "question": "Vida sexual (se aplicável)",
                "required": false, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "Minha vida sexual é normal e não me causa dor extra ", "points": 0 },
                    { "text": "Minha vida sexual é normal, mas me causa dor extra", "points": 1 },
                    { "text": "Minha vida sexual é quase normal, mas é muito dolorosa", "points": 2 },
                    { "text": "Minha vida sexual é muito restringida devido à dor", "points": 3 },
                    { "text": "Minha vida sexual é praticamente inexistente devido à dor", "points": 4 },
                    { "text": "A dor me impede de ter atividade sexual", "points": 5 }
                ]
            }, {
                "question": "Vida social",
                "required": true, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "Minha vida social é normal e eu não sinto dor extra ", "points": 0 },
                    { "text": "Minha vida social é normal, mas aumenta o grau de minha dor.", "points": 1 },
                    { "text": "A dor não altera minha vida social, exceto por impedir que faça atividades de esforço, como esportes, etc", "points": 2 },
                    { "text": "A dor restringiu minha vida social e eu não saio muito de casa.", "points": 3 },
                    { "text": "A dor restringiu minha vida social a minha casa", "points": 4 },
                    { "text": "Não tenho vida social devido a minha dor", "points": 5 }
                ]
            }, {
                "question": "Viagens",
                "required": true, 
                "answers": [
                    { "text": "", "points": null },
                    { "text": "Posso viajar para qualquer lugar sem dor", "points": 0 },
                    { "text": "Posso viajar para qualquer lugar, mas sinto dor extra", "points": 1 },
                    { "text": "A dor é ruim, mas posso viajar por 2 horas", "points": 2 },
                    { "text": "A dor restringe minhas viagens para distâncias menores que 1 hora", "points": 3 },
                    { "text": "A dor restringe minhas viagens para as necessárias e menores de 30 minutos", "points": 4 },
                    { "text": "A dor me impede de viajar, exceto para ser tratado", "points": 5 }
                ]
            }]
        }
    }};