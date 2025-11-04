# Interactive Portfolio Game - Phase & Ticket Breakdown

## Example Site

    https://peteroravec.com/

## Phase Overview Table

| Phase | Phase Name                       | Goal                                                                           | Tickets | Est. Time |
| ----- | -------------------------------- | ------------------------------------------------------------------------------ | ------- | --------- |
| **1** | Foundation & Phaser Integration  | Set up project structure and get Phaser running in React                       | 3       | 2-3 hours |
| **2** | World Foundation (Tiled Map)     | Load and render a Tiled map with basic world structure                         | 3       | 3-4 hours |
| **3** | Player Movement & Collisions     | Player can move around the world with proper collision detection               | 3       | 4-5 hours |
| **4** | Interactive Zones & Detection    | Detect when player approaches interactive objects and trigger events           | 3       | 4-5 hours |
| **5** | React UI Overlay Integration     | Overlay React components on top of Phaser canvas for project displays          | 4       | 5-6 hours |
| **6** | Content, Polish & Responsiveness | Add actual project content, polish animations, and ensure mobile compatibility | 4       | 6-8 hours |
| **7** | Deployment & Final Polish        | Prepare for production and deploy to Netlify                                   | 4       | 2-3 hours |

**Total**: 7 Phases, 24 Tickets, ~26-34 hours estimated

---

## Detailed Ticket Breakdown

### Phase 1: Foundation & Phaser Integration

| Ticket ID               | Ticket Name                     | Description                                                                            | Dependencies          |
| ----------------------- | ------------------------------- | -------------------------------------------------------------------------------------- | --------------------- |
| phase1-game-component   | Create Game component structure | Set up `src/components/Game.tsx` as React wrapper for Phaser with lifecycle management | None                  |
| phase1-typescript-types | Add TypeScript types for Phaser | Install/configure Phaser types and custom game object definitions                      | None                  |
| phase1-test-rendering   | Test basic Phaser rendering     | Render simple shapes/text to verify integration works                                  | phase1-game-component |

**Key Files**: `src/components/Game.tsx`, `src/scenes/MainScene.ts`, `src/types/phaser.d.ts` (if needed)

---

### Phase 2: World Foundation (Tiled Map Integration)

| Ticket ID           | Ticket Name                | Description                                                                | Dependencies                            |
| ------------------- | -------------------------- | -------------------------------------------------------------------------- | --------------------------------------- |
| phase2-tiled-map    | Create starter Tiled map   | Design map with tile layers and object layer including player_spawn marker | None                                    |
| phase2-map-loader   | Implement Tiled map loader | Load and render map.json in Phaser scene                                   | phase2-tiled-map, phase1-game-component |
| phase2-object-layer | Extract object layer data  | Parse object layer for spawn points and interactive zones                  | phase2-map-loader                       |

**Key Files**: `/public/maps/level1.json`, `src/scenes/MainScene.ts`, `src/types/map.ts`

---

### Phase 3: Player Movement & Collisions

| Ticket ID              | Ticket Name                    | Description                                                   | Dependencies           |
| ---------------------- | ------------------------------ | ------------------------------------------------------------- | ---------------------- |
| phase3-player-sprite   | Create player sprite and spawn | Add player sprite and spawn at player_spawn object position   | phase2-object-layer    |
| phase3-player-controls | Implement player controls      | Add WASD/arrow keys with smooth movement and camera follow    | phase3-player-sprite   |
| phase3-collisions      | Set up tile collisions         | Configure physics collisions to prevent walking through walls | phase3-player-controls |

**Key Files**: `src/entities/Player.ts`, `src/scenes/MainScene.ts`, player sprite assets

---

### Phase 4: Interactive Zones & Detection

| Ticket ID                   | Ticket Name                          | Description                                                   | Dependencies             |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------- | ------------------------ |
| phase4-interactive-zones    | Create interactive zone system       | Parse zones from Tiled and implement proximity detection      | phase3-collisions        |
| phase4-visual-feedback      | Add visual feedback for interactions | Show floating text/icons when near interactive elements       | phase4-interactive-zones |
| phase4-interaction-triggers | Implement interaction triggers       | Map zones to project IDs and create Phaser-React event system | phase4-visual-feedback   |

**Key Files**: `src/systems/InteractionSystem.ts`, `src/entities/InteractiveZone.ts`, `src/scenes/MainScene.ts`

---

### Phase 5: React UI Overlay Integration

| Ticket ID                         | Ticket Name                          | Description                                               | Dependencies                      |
| --------------------------------- | ------------------------------------ | --------------------------------------------------------- | --------------------------------- |
| phase5-react-phaser-communication | Set up React-Phaser communication    | Create event bus/context for Phaser-React data passing    | phase4-interaction-triggers       |
| phase5-project-panel              | Build project detail panel component | Create ProjectPanel with TailwindCSS styling              | phase5-react-phaser-communication |
| phase5-overlay-system             | Create overlay UI system             | Build Overlay component to position UI over Phaser canvas | phase5-project-panel              |
| phase5-navigation-components      | Add navigation/about components      | Create menu/navigation overlay with TailwindCSS           | phase5-overlay-system             |

**Key Files**: `src/components/ProjectPanel.tsx`, `src/components/Overlay.tsx`, `src/context/GameContext.tsx`, `src/App.tsx`

---

### Phase 6: Content, Polish & Responsiveness

| Ticket ID                | Ticket Name                        | Description                                                 | Dependencies                 |
| ------------------------ | ---------------------------------- | ----------------------------------------------------------- | ---------------------------- |
| phase6-project-content   | Populate project content           | Create project data structure and map to interactive zones  | phase5-navigation-components |
| phase6-animations        | Enhance animations and transitions | Add smooth player movement, UI transitions, floating text   | phase6-project-content       |
| phase6-responsive-design | Responsive design & mobile support | Make Phaser canvas and UI responsive for mobile             | phase6-animations            |
| phase6-performance       | Performance optimization           | Optimize asset loading and ensure 60fps across screen sizes | phase6-responsive-design     |

**Key Files**: `src/data/projects.ts`, `src/components/ProjectPanel.tsx`, responsive CSS updates

---

### Phase 7: Deployment & Final Polish

| Ticket ID                    | Ticket Name                    | Description                                                | Dependencies                 |
| ---------------------------- | ------------------------------ | ---------------------------------------------------------- | ---------------------------- |
| phase7-production-build      | Production build configuration | Test production build and ensure all assets load correctly | phase6-performance           |
| phase7-netlify-deployment    | Netlify deployment setup       | Create netlify.toml and configure deployment               | phase7-production-build      |
| phase7-cross-browser-testing | Cross-browser testing          | Test in multiple browsers and fix compatibility issues     | phase7-netlify-deployment    |
| phase7-final-polish          | Final polish & bug fixes       | Test complete user journey and fix remaining bugs          | phase7-cross-browser-testing |

**Key Files**: `netlify.toml`, `vite.config.ts` (production optimizations)

---

## Technical Notes

- **Asset Organization**:

  - `/public/maps/` - Tiled map JSON files
  - `/public/sprites/` - Player and world sprite assets
  - `/src/assets/` - React-specific assets if needed

- **State Management**: Recommend React Context API for simplicity, or Zustand for more complex state

- **Phaser Version**: Using Phaser 3.90.0 - ensure compatibility with React 19

- **TypeScript**: All game logic and React components should be fully typed

- **Build Tool**: Vite for fast local development and optimized production builds

- **Deployment**: Netlify for hosting and deployment platform

---

## Project Summary

This interactive portfolio game combines:

- **React + TypeScript** → UI structure, component logic, and modular design
- **Phaser** → Game engine for the interactive world, player movement, and physics
- **Tiled** → Visual map editor for designing levels, objects, and interactive zones
- **TailwindCSS** → Styling system for layout, color, and UI overlays
- **Vite** → Lightweight build tool for fast local development
- **Netlify** → Hosting and deployment platform

**Final Result**: An interactive, game-style portfolio where your work is presented as part of an explorable digital world — merging design, storytelling, and technical depth into one cohesive experience.
