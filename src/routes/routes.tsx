import { createFileRoute } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

export const Route = createFileRoute("/routes")({
  component: RoutesPage,
});

// Define an interface for route nodes
interface RouteNode {
  path?: string;
  fullPath?: string;
  children?: Record<string, RouteNode>;
}

function RoutesPage() {
  // Function to recursively extract routes with uniqueness check
  const extractRoutes = (node: RouteNode, routeSet = new Set<string>()) => {
    // Add current path if it's not the root
    if (node.path && node.path !== "") {
      routeSet.add(node.fullPath || node.path);
    }

    // Process children if any
    if (node.children) {
      Object.values(node.children).forEach((child: RouteNode) => {
        extractRoutes(child, routeSet);
      });
    }

    return Array.from(routeSet).sort();
  };

  // Get all unique routes from the route tree
  const routes = extractRoutes(routeTree as unknown as RouteNode);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Routes</h1>
      <ul className="space-y-2">
        {routes.map((route) => (
          <li key={route} className="hover:bg-gray-100 p-2 rounded">
            <a href={`#${route}`} className="text-blue-500 hover:underline">
              {route}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
