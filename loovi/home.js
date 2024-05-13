//Função para exibir e ocutar botões no menu lateral
function toggleButtons() {
    var buttonsContainer = document.getElementById('buttonsContainer');
    if (buttonsContainer.classList.contains('hidden')) {
      buttonsContainer.classList.remove('hidden');
    } else {
      buttonsContainer.classList.add('hidden');
    }
}



//Função para pesquisar na tabela
const inputBusca = document.getElementById('busca');
const tabela = document.getElementById('tabela');

inputBusca.addEventListener('keyup', function() {
    const termoBusca = inputBusca.value.toLowerCase();
    const linhas = tabela.querySelectorAll('tbody tr');

    for (let linha of linhas) {
        const celulas = linha.querySelectorAll('td');
        let textoCelula = '';

        for (let celula of celulas) {
            textoCelula += celula.textContent.toLowerCase();
        }

        if (textoCelula.includes(termoBusca)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    }
});




//Função para ordenar a tabela
const table = document.querySelector('tabela');
const dropdownMenuButton = document.getElementById('ordenacaoMenuButton');

dropdownMenuButton.addEventListener('click', (event) => {
    const dropdownMenu = event.target.nextElementSibling;
    dropdownMenu.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            const column = item.dataset.sort;
            const asc = item.classList.contains('active');

            dropdownMenu.querySelectorAll('.active').forEach(item => {
                item.classList.remove('active');
            });

            item.classList.add('active');

            sortTable(column, asc);
        });
    });
});

function sortTable(col) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tabela");
    switching = true;
    dir = "asc"; 
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[col];
            y = rows[i + 1].getElementsByTagName("td")[col];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++; 
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}