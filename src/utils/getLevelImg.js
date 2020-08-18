export default function getLevelImg (that, song, levelArr) {
  let str = song.credibilityLevel.levelName;
  let reg = '^[A-Z]+$';
  let levelArrInfo = str.match(reg);
  if (levelArrInfo) {
    that.$set(song, 'levelImg', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAFMandsAAAAAXNSR0IArs4c6QAAArZJREFUOBGdVF1LFFEYfubs7K47u+sHpRaClcWiCbaUZkWQlaFEkGEQ9APCuummi676EYEX2lUQdGEXQrZEZdGXGCqSmBCiJX7biu7s7owzcz46M7pitAj1DnPemed9n+ec97xnBpA23HXC73rPUtXVIvf8t1f4h7gAVXZEph811rmvdOacR2TjN+54cauvXogIAbE4Ai3DOzlbdPGuKTLVVVs5313T6ULKxqvzQjm8DP9MEA4LQ+XpFMh8FNTmYKa5xdvN8cVWIe2P2bwX+2Mzn34+W1R1t1gnBgeZpZgeMi6UxyIvIm1VUeKq0l9pJdaq6Sy1iJHYJCBLqmrQ3hLuCylKD1PdpFCIfIZVEC2YqcDJRAVguyigaZv+38bURHOSvo7znSyymrg0lAOIsCLEp2xXJMba21Rn3eQL3UcTosx3MFhsB7EMbPQdY3MT5k0nbTxV5rqOd+0/4rtFDxmwemyo2TIUNBmeqJ7STEIN+4uTFRC6gZ9jOtZ6F7ygYAqcNSOpavvIpJD1k+RexDoIlCyXfZAEudRQhKlqaUmRBUHH4Eiie8PbQ9lHIBD193ty/z2sDFx8yZeviPSzurndRLbmzJ9C1zKjwjHBGGf5MzZRMtV9qoOOXBPLTxof5BK/3qsLr35qSJbVB+8L20Rhqb+SvYnzHw9rbudyvnXWRrLvLy/Zw22DXoeWHjf2lhwovOrnSaR0h4bjflUoQu6JvLKAbylHBYx1xgKa4lOCUdh2kIVb+lWvHCtjjfKMAeqoKCr0q9zMgKYyGD+ziO+nl6C3Z5GZpJ6SVuzzqQECKntrrWZ0F/SOKTedQZY2wKWkWiq7kmFQAlnUJBSkJ/zQSjSoge1jBSo/L6ZnIQy67op4ETFwtkcEcN0FPNsjD3l463exIVewImvKY5JMUc4K84T+HfoNI48sBidsbqcAAAAASUVORK5CYII=')
    levelArr = levelArrInfo[0].split('');
  } else {
    reg = '^[A-Z0-9]+$'
    levelArrInfo = str.match(reg)
    levelArr = 6 - levelArrInfo[0].split('')[1]
    let tag = levelArrInfo[0].split('')[0]
    that.$set(song, 'levelImg', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAFMandsAAAAAXNSR0IArs4c6QAAAwRJREFUOBGNVGlIVFEU/t4yzrOZxpyi0UIqjKywMgmigrIUgiSiCMqf+qOCCiIkDCpaKII2yAoUMoggCpSgKCrKFiq3sMUWtalxGcdlxtnnzVvm3e57OWjJQAce953vbN8953CBf6X5jJf8i43rzIe3TuL3xsYRXDv6eJeuNj3rNAJrjt+fwujAzQuNhOUBRdFQXllsYDr+t9yrayknxwlLCGGZG+efklUlC+HpDeBj00/wzu8DmJohIBpS0ev0/h06SXt853NFy/PuSfyZy1WPyuxZ1soBd6h0e0WhZ6g/iHhMxvotS5m6c89la9RrNfidOXCbFJUWQO0jYKtzoJxwGVWaGjtw+FIZw9TUtJn8nz0yqLvZzEOWVJAJBauubE5x0Ulsx4ChvgCpr219MNHOXj/9Yn0SEKMS7SNZktRvXXy9lak5+YQkYun25RtmurNyMtJd3SNwdY1eTcTJV0mO7+YjMVEtXJ09andMAb7RMRAWcxfY90qigo7W0DVWFqWAFFcgyypsDRkYaFCMCv09w1AltZkPBiX5a5sLkUAMnevcUEMKeruBn51D0ET+C59py9TkGEFfV9iIlOKqcdrS7WCt7Nok4ZRnyk610S4LBY5hnzdoGfwVLNmxb82rVFnYVIbwTM7CshAEIc1EiOZI5afjTO2pZ4pG4N1zrDg76Xjz3LuVK4py3lhsJs7TF4BIN2awJ/yybP/qoqRP/ZWWtYFw5CXHkY3GdaqPPNSy50xj0kwmKU3gw/PzHTMI/mzIyEAYest1SagaGewJdWXPycjr7HDTddTqD54t3U4nBcRFMdbvki3LVuaarTazWZEVhFoTyHHOg/8HZSG4kbkzCo5nmdm50/K8gwFEQhEwGteuxxtJaKWRWDxqGaFGjrMjTeAgLAM+Se3wUxaO4nTqOj6DHqcHohgHTyxvjSTkLuHq/e9naVqC8gVCPhm5i7PA0q5mbZuOb20eBH0iGIYZ+4BF+QvpP0jAF91KkzQa6fUnYdTH5elZ/1c4Wu9Q9San7v8btndiBvSZnVUAAAAASUVORK5CYII=')
    if (tag === 'B') {
      that.$set(song, 'levelImg', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAAG+6sciAAAAAXNSR0IArs4c6QAAAldJREFUKBWNk0tPU1EQx+fcR3uhBSq2UQqLxgYx0ZBIaNVG04bElWHh1i+gJoaVIbAggcRYIx/AHVtMTHRTYoxGNkqqsKkxWigpNLgobRVK6eM+x3OO3FtJDHEWM3Nm/ud3HvdcAGozKqosCswZB7qLRfJOt/RlE0xy9U0dS1kChJWnyxqyyCwZcPEaHwTnD5wGLzCqTZbi6QZSMm8kaC40d6UIH1FXWpdGeH5hoRYPPNKvswEnj+fU5CkZpsLe9kLZGkLNgNnUoHuOxD5iGA8bm4kRmRP+di9TFvQE3eec2qXFRuwaPQw7w8CTQxx41ojaTc6/u6PPh89IE3QFx3IV4/HzfnmOC25tqBjtbe/ForK1XxYsnVeIlEg3k10mQgvbAobxUdXYp+as0KrihOKA24msEShuCA/5tCuv61q/X5CHQiJX5LMWpDOgFR4obocbXarr3W4idTcBVr6DXpzs5B+tzaRZJNXQfTO1P5d+1HEIt3/gaVPVt+/3id6bCoFdKvhJj12hsXIU92he2DOhWMN9N8qhF2FSZRwOGV9Hv6pqWwTQezEggFtirX+bagB8K1tgIdnv8bo4iCSW0W+Q1pYgoDc6KIF8AsDGmvQqP+cM0HRSdfmUEN/J6FvtsmgaaQHQFQqKEOrjD9mecyzuFExIrwKgBFqHR4l8vUO+OHfClKOvGlFRgQ90V3KvB2B4qP2wNjMGrGYQDIHorg6M5e951mz6MYhdHF5s3lC68L0ooySULMhvA2j0FxNlMV6a6lyxdf8VwwvNsbNPD8re6Vr8pAm/AdOa8dVAGgZMAAAAAElFTkSuQmCC')
    } else if (tag === 'C') {
      that.$set(song, 'levelImg', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAFMandsAAAAAXNSR0IArs4c6QAAAmpJREFUOBG1Uk1oE0EU/ib2oBHJqbRqBY8KQsFTKFvoQUUFT9WTNAdtC9KD9BRRwSKIeCo9V0UhoGDxUhBs0pOIORUqlRhbihXNj7Vpd7Ob/ZndHd/OpG1oxJMOvN03733zvV9g7xFXU2KvbffOxOiYMNZWWyyRKsbTAmYdMA2wFxnWIf3r5cXSj1JvwXUWd/EtGhPpe/TMAOo6YNURQ4M4GiaJhXylqrDr5y6Ij/0Df86KRRgx8fA4bDsPz33DJh9dE8NjT8Gdi3CDJHv57KsCjd8S6DkCFIsgoBLXxa8tHZ3zb5s529YMlpYuw3MI4OFnrQbd9/GNezMtmSu1dv6SNt+n2VlN09qcfzOofG5PvKIQSbjiNDWOGuAs0D3PMs+vMHHn/jRcd5gE4M1km0nXDeNxDNwbJAGOUUWcy2Tln/RPpjkYg8dnJaD4RZUagYmhROVaQTirchi5IWQIcriWiQ3TQsGxcebD+2Y/BO+2Db2yqdOE6NAsgfj+7rbqFvoHctk+Ldfm+O8GVciDycO0gAWEfgJBAAQ+QHNDGFThB9NkGyFbF92VPfKHgQ6/4yR7nSmrhTX0LIESRAL0HCVACKysEFnQRXJXkm6TRwSkB5wnVg0jS2WeUiS+F5eRI8DysgTtPJQZEWnkk7oP3Wpgw+VY8+gdnSaJmwL330URmmUoIlWStAki2aJ52WSrkVR82oJ9LBWRyJ5EihhNJ8A38xTxhKydCLnjoG5ZcKK1oWNST77TrocMnxE/kDyby8lh75BIFH3E0NDBcqk6JcLwemTzQoEyRbWIgIE96TwUv9k7N2dt4//Z/ze3+YJeSUytGwAAAABJRU5ErkJggg==')
    }
  }
  return levelArr
}