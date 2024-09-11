        var listOfTodo = document.getElementById('check')

        var receiveValue = document.getElementById('getData');

        
        function add() {
    

    if (receiveValue.value === '') {
        
        document.getElementById('inputdata').innerHTML = 'Please something write here';
    } else {
        document.getElementById('inputdata').innerHTML = '';

        var mainDiv = document.createElement('div');

        mainDiv.setAttribute('class', 'getItems')
        
        mainDiv.id = 'delete'

        listOfTodo.appendChild(mainDiv)

        var item_name = document.createElement('div');

        item_name.setAttribute('class', 'item-name');

        item_name.setAttribute('id', 'change');

        item_name.textContent = receiveValue.value;

        mainDiv.appendChild(item_name)

        var item_name_edit = document.createElement('div');

        item_name_edit.setAttribute('class', 'reset');

        var ediBtn = document.createElement('button');

        ediBtn.id = 'edit';

        ediBtn.innerHTML = 'Edit';

        item_name_edit.appendChild(ediBtn)

        mainDiv.appendChild(item_name_edit)

        var item_name_dele = document.createElement('div');

        var item_name_del = document.createElement('button');

        item_name_del.id = 'close';

        item_name_del.innerHTML = 'Delete';

        item_name_dele.appendChild(item_name_del)
        
        mainDiv.appendChild(item_name_dele)

        ediBtn.addEventListener("click", function () {
            var getNewData = prompt('Do you like to change data')
            if (getNewData === '') {
                receiveValue.value = '';
                document.getElementById('inputdata').innerHTML = 'Do you like to change data';
            } else if (getNewData === null) {
                receiveValue.value = '';
                item_name.innerHTML;
            }
            else {
                receiveValue.value = '';
                item_name.innerHTML = getNewData;
            }
        });

        item_name_del.addEventListener("click", function () {
            var funDel = confirm('Do you like to erase data')
            if (funDel) {
                receiveValue.value = '';
                mainDiv.remove(); 
            } else { alert('cencal') }
        });

    }
}