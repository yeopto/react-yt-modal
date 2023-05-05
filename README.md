# Yeopto's Modal Libarary

This is a library that enables you to use a modal that appears from the bottom. You can close the modal by clicking on the background, and you can also close it by pressing the 'ESC' key.

## Installation

### npm

```
npm install react-yt-modal
```

### yarn

```
yarn add react-yt-modal
```

## Props

### isOpen

- A status value of type boolean indicating whether the modal is open or closed.

### closeModal

- A custom function that closes the modal.
- Should contain the logic to change `isOpen` to `false`.

### portalNode

- Pass the DOM node where the modal will be rendered (optional).

## User Guide

### Import Library

```tsx
import Modal from "react-yt-modal";
```

### Use Library

```tsx
<Modal
  isOpen={/* Modal State */}
  closeModal={/* Close Modal Function */}
  portaNode={/* DOM node(optional) */}
>
  {/* Modal Contents(ReactNode) */}
</Modal>
```

### Using Example Code

```tsx
import Modal from "react-yt-modal";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const root = document.querySelector("#root");

  return (
    <Container>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} portalNode={root}>
        <Caption>
          Hi there, I'm a modal that you can open and close. Now you can close
          me by clicking on the close button on my window.
        </Caption>
        <Button onClick={closeModal}>Close Modal</Button>
      </Modal>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: monospace;
  width: 100vw;
  height: 100vh;
`;

const Button = styled.button`
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  width: 130px;
  height: 50px;
  background-color: #14428d;
  padding: 10px;

  cursor: pointer;
`;

const Caption = styled.p`
  text-align: justify;
  margin-bottom: 20px;
`;
```

## Development Environment

- React(Create-React-App)
- TypeScript
- Styled-Components

## Browser Support

<table>
  <tr>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="Chrome icon" />
    </td>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png" alt="Safari icon" />
    </td>
  </tr>
  <tr>
    <td align="center">
      Latest ✓
    </td>
    <td align="center">
      Latest ✓
    </td>
  </tr>
</table>

## Version

- 0.0.2 (latest)
