# Sem nome (por enquanto)

Projeto de extensão da faculdade.

# Desenvolvimento

## Configuração de ambiente

Segue em baixo a lista de programas, de forma detalhada, que serão instalados para o desenvolvimento do projeto.

1. Chocolatey - gerenciador de pacotes
2. Node.js - runtime do JavaScript no back end
3. JDK17 (Java Development Kit) - kit de ferramentas para o desenvolvimento de aplicativos em Java
4. Android Studio - ambiente de desenvolvimento integrado oficial para Android
5. ADB (Android Debug Bridge) - ferramenta de linha de comando versátil que permite a comunicação com um dispositivo

## Extensões

Segue em baixo a lista de extensões para facilitar o desenvolvimento do projeto. Na lista tem extensões para o desenvolvimento pro uso de HTML, CSS e JS. Mas também algumas extensões para visualização de erros. E, por último, um tema do **One Dark Pro** por alguns motivos que são óbvios: a sintaxe das linguagens ficam destacadas de forma facilitadora para entender alguns processos, o visual é agradável e não "machuca" os olhos tão agressivamente.
Para instalar as extensões basta copiar os IDs e colar na barra de busca da seção de extensão do **VS Code**.

- Auto Close Tag - ID: _formulahendry.auto-close-tag_
- Auto Rename Tag - ID: _formulahendry.auto-rename-tag_
- Babel JavaScript - ID: _mgmcdermott.vscode-language-babel_
- Color Highlight - ID: _naumovs.color-highlight_
- Error Lens - ID: _usernamehw.errorlens_
- Path Intellisense - ID: _christian-kohler.path-intellisense_
- string-highlight - ID: _jenkey2011.string-highlight_
- React Native Tools - ID: _msjsdiag.vscode-react-native_
- Template String Converter - ID: _meganrogge.template-string-converter_
- One Dark Modern - ID: _cweijan.onedark-modern_

# Pré-instalações

1. Instalação do Chocolatey
   Execute o comando abaixo no seu Powershell no _modo administrador_ para instalar o **Chocolatey**:

```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

2. Instalação dos programas via Chocolatey
   Execute o comando abaixo no seu prompt de comando no _modo administrador_ para instalar os programas necessários para trabalhar com o projeto:

```bash
choco install -y nodejs-lts microsoft-openjdk17 adb
```

# Etapas importantes

Antes de começar a usar o **npm**, certifique-se que ele está devidamente atualizado. Para isso, realize o comando abaixo no seu terminal:

```bash
npm install -g npm@latest
```

O comando acima instalará, no caso atualizará, o **npm** para sua última versão. Após isso, siga os passos abaixo.

1. Clonagem

```bash
git clone https://github.com/theheapsters/project.git
```

2. Instalação de módulos

```bash
cd scripts && npm install
```

3. Rodando o projeto

```bash
cd scripts && npm start
```

ou

```bash
cd scripts && npx expo start
```