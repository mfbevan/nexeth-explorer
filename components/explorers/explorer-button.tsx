import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ChainExplorer } from "@thirdweb-dev/chains";
import Link from "next/link";
import { FC } from "react";

import { Button } from "../ui/button";

import { ExplorerLinkType, createExplorerUrl, toTitleCase } from "@/lib";

export interface ExplorerButtonProps {
  explorer: ChainExplorer;
  type?: ExplorerLinkType;
  location?: string | number;
}

export const ExplorerButton: FC<ExplorerButtonProps> = ({
  explorer,
  type,
  location,
}) => (
  <Link
    href={createExplorerUrl({ explorer, type, location })}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="xs"
      variant="secondary"
      className="flex items-center gap-1 font-light pl-1 justify-between w-full"
    >
      <div className="flex gap-1">
        🌐
        <span>{toTitleCase(explorer.name)}</span>
      </div>
      <ExternalLinkIcon className="w-3 h-3" />
    </Button>
  </Link>
);

export interface ExplorerButtonGroupProps {
  explorers?: ChainExplorer[] | readonly ChainExplorer[];
  type?: ExplorerLinkType;
  location?: string | number;
}

export const ExplorerButtonGroup: FC<ExplorerButtonGroupProps> = ({
  explorers,
  type,
  location,
}) => (
  <div className="flex gap-2">
    {explorers?.map((explorer) => (
      <ExplorerButton
        key={explorer.name}
        explorer={explorer}
        type={type}
        location={location}
      />
    ))}
  </div>
);
