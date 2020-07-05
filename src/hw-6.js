/**
 * Напсиать функцию перебора значений в дереве, каждое значение нужно отобразитьв консоль
 * Пример простого дерева:
 */

const tree = {
  value: 10,
  children: [
    {
      children: [
        {
          value: 2,
          children: [
            { value: 7 },
            {
              value: 10,
              children: [{ value: 9 }]
            }
          ]
        }
      ]
    },
    { children: [{ value: 100 }] },
    { value: 5 }
  ],
};

function task1(tree) {
  if (tree.value) {
    console.log(tree.value);
  }
  if (tree.children) {
    for (let n = 0; n < tree.children.length; n++) {
      if (typeof tree.children[n] === 'object') {
        task1(tree.children[n]);
      }
    }
  }
}


// нарисовать таблицу, только, конечно же, через js
// стили тоже менять через js
// заполнять таблицу из массива с данными

const table = [
    {
        name: 'Vitalik',
        surName: 'Petrov',
        age: 11,
        phones: [11111],
    }, {
        name: 'Valeriy',
        age: 51,
        phones: [1111, 2222],
    }, {
        name: 'Kate',
        surName: 'Ivanova',
        age: 20,
        phones: [111111, 22222, 333333],
    }, {
        name: 'Lera',
        surName: 'Kuznetsova',
        age: 110,
        phones: [77777777],
    }, {
        name: 'Alex',
        age: 5,
        phones: [555555, 666666],
    }
];

const newTable = document.createElement('table');

newTable.style.cssText = 'width: 900px; border: 1px solid black; font-family: Arial; font-size: 14px';

const thead = document.createElement('thead');
newTable.append(thead);

const Columns = Object.keys(table[0]);

Columns.forEach(columnName => {
  const th = document.createElement('th');
  columnName = columnName[0].toUpperCase() + columnName.slice(1);
  th.innerText = columnName;
  thead.append(th);
  th.style.cssText = 'border: 1px solid black';
})

thead.children[0].style.width = '300px';
thead.children[1].style.width = '300px';
thead.children[2].style.width = '150px';
thead.children[3].style.width = '150px';

for (let i = 0; i < table.length; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < 4; j++) {
    const td = document.createElement('td');
    td.style.border = '1px solid black';

    if (j === 0) {
      td.innerHTML = table[i].name;
      td.style.textAlign = 'center';
      if (!table[i].surName) {
        td.style.height = '60px';
        td.style.color = 'red';
        td.setAttribute('colSpan', '2');
      }
    }
    
    if (j === 1) {
    if (table[i].surName) {
      td.innerHTML = table[i].surName;
    } else {
      td.style.display = 'none';
    }
  }
  
  if (j === 2) {
    td.innerHTML = table[i].age;
  }

  if (j === 3) {
    if (table[i].phones.length === 1) {
    td.innerHTML = table[i].phones;
    td.style.color = 'yellow';
    } else {
      td.style.color ='blue';
      const ul = document.createElement('ul');
      for (let n = 0; n < table[i].phones.length; n++) {
        const li = document.createElement('li');
        li.innerHTML = table[i].phones[n];
        ul.append(li);
        td.append(ul);
      }
    }
  }
  tr.append(td);
  newTable.append(tr);
}
}

document.body.prepend(newTable);