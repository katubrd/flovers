  // var img1 = {url: 'assets/header/bg_plant.svg', x: 5, y: 1, offset: -0.4},
  //     img2 = {url: 'assets/header/flover.png', x: -10, y: -5, offset: 0.2},
  //     img3 = {url: 'assets/header/border.svg', x: 5, y: 10, offset: -0.7};

  var img1 = document.getElementById('bg'),
      img2 = document.getElementById('flover'),
      img3 = document.getElementById('border');

  var assets = [
    img1,
    img2,
    img3
  ],
    layers = [],
    w = 600,
    h = 800,
    loaded = 0,
    container = document.getElementById('header_parallax'),
    s = new Snap(w, h),
    c,
    g;

  container.appendChild(s.node);
  TweenMax.set(s.node, {scale: 0.9});

  g = s.g();
  c = s.g();
  g.append(c);

  for (var i = 0; i < assets.length; i++) {
    var img = new Image();
    img.src = assets[i].url;
    img.onload = handle_load;

    var _img = s.image(assets[i].url, assets[i].x, assets[i].y);
    c.append(_img);
    layers.push(_img);
  }

  function handle_load() {
    loaded += 1;

    if (loaded == assets.length) {
      handle_loaded();
    }
  }

  function handle_loaded() {
    container.addEventListener('mousemove', handle_mousemove);
    container.addEventListener('mouseout', handle_mouseout);
    container.addEventListener('mouseover', handle_mouseover);
  }

  function handle_mousemove(e) {
    var dx = e.offsetX - (w / 2);
    var dy = e.offsetY - (h / 2);

    for (var i = 0; i < layers.length; i++) {
      var l = layers[i];
      var _x = dx * assets[i].offset;
      var _y = dy * assets[i].offset;
      TweenMax.to(l.node, 0.1, {x: _x, y: _y});
    }
  }

  function handle_mouseout(e) {
    for (var i = 0; i < layers.length; i++) {
      var l = layers[i];
      TweenMax.to(l.node, 0.2, {x: 0, y: 0, ease: Quad.easeOut});
    }

    TweenMax.to(s.node, 0.2, {scale: 0.9, ease: Quad.easeOut});
  }

  function handle_mouseover(e) {
    TweenMax.to(s.node, 0.2, {scale: 1, ease: Back.easeOut});
  }
