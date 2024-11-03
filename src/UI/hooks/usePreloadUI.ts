import { useEffect } from 'react';

export const usePreloadUI = (): void => {
  useEffect(() => {
    const importAll = (r: any): Array<{ default: string }> => {
      return r.keys().map(r);
    };

    // TODO: Add images from public folder

    //! Hack for using vite plugin instead of webpack
    const imagesModules = [
      ...importAll((require as any).context('rpgui/img/', false, /\.(png|jpe?g|svg)$/)),
      ...importAll((require as any).context('rpgui/img/icons', false, /\.(png|jpe?g|svg)$/)),
      ...importAll((require as any).context('rpgui/img/cursor', false, /\.(png|jpe?g|svg)$/)),
      ...importAll((require as any).context('/src/atlas/icons', false, /\.(png|jpe?g|svg)$/)),
      ...importAll((require as any).context('/src/atlas/items', false, /\.(png|jpe?g|svg)$/))
    ];

    const preloadContainer = document.createElement('div');
    preloadContainer.id = 'preload-container';
    preloadContainer.style.zIndex = '-9999';
    preloadContainer.style.position = 'absolute';
    document.body.appendChild(preloadContainer);

    imagesModules.forEach((imageModule) => {
      const div = document.createElement('div');

      div.style.backgroundImage = `url(${imageModule.default})`;
      preloadContainer.appendChild(div);
    });
  }, []);
};