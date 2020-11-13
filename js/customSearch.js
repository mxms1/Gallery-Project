function customSearch(){
  var input, search, a;
  input = document.getElementById('search');
  search = input.value.toLowerCase();
  a = document.getElementsByTagName('a');

  for (let i = 0; i < a.length; i++){
    const imageDesc = a[i].getAttribute('data-caption').toLowerCase();
    const image = document.getElementsByTagName('img');
    const imageTitle = image[i].getAttribute('alt').toLowerCase();
    if (imageDesc.includes(search) || imageTitle.includes(search)){
      a[i].classList.remove('hide');
    }else{
      a[i].classList.add('hide');

            }

        }

    }
  search.addEventListener('keyup', customSearch);
