{ pkgs }: {
  deps = [
    pkgs.nodejs-16_x
    pkgs.npm install react-loading-skeleton
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}