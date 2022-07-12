import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  position: fixed;
`;

const StyledImage = styled.div`
  width: 50%;
  height: 500px;
  background-color: #aaa;
  margin-top: 10%;
`;

const StyledTitle = styled.h1`
  font-size: 1.3rem;
  color: #000;
  font-weight: bold;
  transition: all 0.3s;
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Test2 = () => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleScrollYChange = e => {
      console.log(window.scrollY);
      if (isTop === false && window.scrollY >= 520) {
        setIsTop(prev => !prev);
      }
      // else if ( isTop === true && )
    };
    console.log(isTop);

    window.addEventListener('scroll', handleScrollYChange);

    return () => {
      window.removeEventListener('scroll', handleScrollYChange);
    };
  });

  return (
    <StyledWrapper>
      <StyledNav>Navigation</StyledNav>
      <StyledImage>StyledImage</StyledImage>
      <StyledTitle>Title</StyledTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In tellus integer
        feugiat scelerisque varius morbi enim nunc. Mauris vitae ultricies leo
        integer. Sed sed risus pretium quam vulputate dignissim suspendisse. In
        aliquam sem fringilla ut morbi tincidunt augue interdum velit. A erat
        nam at lectus. Porta nibh venenatis cras sed felis eget. Pellentesque
        habitant morbi tristique senectus et. Nascetur ridiculus mus mauris
        vitae ultricies leo integer. Gravida quis blandit turpis cursus in.
      </p>
      <p>
        Risus at ultrices mi tempus imperdiet nulla. Vestibulum rhoncus est
        pellentesque elit ullamcorper dignissim. Ipsum consequat nisl vel
        pretium lectus quam. Ipsum suspendisse ultrices gravida dictum fusce ut
        placerat orci nulla. Nunc eget lorem dolor sed viverra ipsum nunc
        aliquet bibendum. Aenean et tortor at risus viverra adipiscing at in
        tellus. Tempor nec feugiat nisl pretium fusce id. Purus gravida quis
        blandit turpis cursus in hac habitasse. Cras tincidunt lobortis feugiat
        vivamus at. In egestas erat imperdiet sed. Diam vulputate ut pharetra
        sit amet aliquam id diam maecenas. Ante in nibh mauris cursus mattis
        molestie. In vitae turpis massa sed. Scelerisque viverra mauris in
        aliquam sem fringilla. Suscipit adipiscing bibendum est ultricies
        integer quis. Tristique senectus et netus et malesuada fames. Lobortis
        feugiat vivamus at augue. Ullamcorper eget nulla facilisi etiam
        dignissim diam quis enim lobortis. Arcu dictum varius duis at
        consectetur lorem. Volutpat blandit aliquam etiam erat
      </p>
      <p>
        velit scelerisque in dictum non. Pellentesque dignissim enim sit amet
        venenatis urna cursus eget. Purus sit amet volutpat consequat mauris
        nunc. Ut ornare lectus sit amet est placerat in egestas. Varius duis at
        consectetur lorem donec massa. Suspendisse faucibus interdum posuere
        lorem ipsum dolor. Convallis a cras semper auctor neque vitae tempus.
        Mattis enim ut tellus elementum sagittis. Habitant morbi tristique
        senectus et netus et malesuada fames. Quam nulla porttitor massa id. Ut
        eu sem integer vitae justo eget. Fermentum iaculis eu non diam
        phasellus. Viverra tellus in hac habitasse platea dictumst vestibulum.
        Eget est lorem ipsum dolor. Ut diam quam nulla porttitor massa id neque.
        Viverra nibh cras pulvinar mattis. Et leo duis ut diam quam. Hendrerit
        dolor magna eget est lorem ipsum. Vulputate sapien nec sagittis aliquam.
        Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae
        tempus quam pellentesque nec nam. Molestie a iaculis at erat
        pellentesque adipiscing commodo. Semper eget duis at tellus. Cursus sit
        amet dictum sit amet justo. Hendrerit gravida rutrum quisque non. Semper
        feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Non nisi est
        sit amet facilisis magna etiam. Gravida arcu ac tortor dignissim
        convallis. Condimentum lacinia quis vel eros donec ac. Adipiscing elit
        pellentesque habitant morbi tristique senectus et netus. Dui sapien eget
        mi proin sed. Facilisis leo vel fringilla est ullamcorper eget nulla
        facilisi etiam. Non nisi est sit amet facilisis
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
      <p>
        magna etiam tempor orci. Et sollicitudin ac orci phasellus. Tincidunt
        praesent semper feugiat nibh sed pulvinar proin. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Amet venenatis urna cursus
        eget nunc. Nibh venenatis cras sed felis eget velit aliquet sagittis.
        Ultrices in iaculis nunc sed augue. Lobortis mattis aliquam faucibus
        purus in massa tempor. Amet cursus sit amet dictum sit amet justo donec
        enim. Ornare lectus sit amet est placerat in egestas. Pharetra vel
        turpis nunc eget lorem dolor sed viverra ipsum. At in tellus integer
        feugiat scelerisque varius morbi enim nunc.
      </p>
    </StyledWrapper>
  );
};

export default Test2;
