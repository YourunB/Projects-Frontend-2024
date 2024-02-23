import './sources.css';

interface DataLoad {
    name: string;
    id: string;
}

export function checkElement<T extends HTMLElement>(
    elementName: string,
    nodeName: HTMLElement | Document = document
): T {
    const element = nodeName.querySelector<T>(elementName);
    if (element != null) return element;
    else throw TypeError;
}

class Sources {
    public draw(data: DataLoad[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            const checkNode = <T>(element: T | HTMLElement): element is HTMLElement =>
                element instanceof DocumentFragment;
            if (!checkNode(sourceClone)) throw TypeError;

            checkElement('.source__item-name', sourceClone).textContent = item.name;
            checkElement('.source__item', sourceClone).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        checkElement('.sources').append(fragment);
    }
}

export default Sources;
