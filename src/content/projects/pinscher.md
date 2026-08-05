---
title: Pinscher
---

# Pinscher Engine

Pinscher is a 3D game engine designed to build scalable games and targets a wide range of hardware across all major operating systems.

<img src="/pinscher2.webp" alt="Pinscher Editor" class="img-half" />

Pinscher Editor - Main View

## Stack

| Dependency                  | Description                                        | Link                                                                                                                          |
| --------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| C++20                       | Engine, editor, game client, and dedicated server  | [cppreference](https://en.cppreference.com/w/cpp/20)                                                                          |
| CMake 3.24+                 | Cross-platform build system                        | [cmake.org](https://cmake.org/)                                                                                               |
| Windows, macOS, Linux       | Desktop clients and dedicated servers              | [Windows](https://developer.microsoft.com/windows), [macOS](https://developer.apple.com/macos/), [Linux](https://kernel.org/) |
| SDL3                        | Windowing, input, and platform audio output        | [libsdl.org](https://www.libsdl.org/)                                                                                         |
| OpenGL 4.1 Core             | Primary rendering API                              | [khronos.org](https://www.khronos.org/opengl/)                                                                                |
| glad 2                      | Generated OpenGL 4.1 bindings                      | [github](https://github.com/Dav1dde/glad)                                                                                     |
| glm                         | Math library for vectors, matrices, and transforms | [github](https://github.com/g-truc/glm)                                                                                       |
| Jolt Physics                | Character movement, collision, and simulation      | [github](https://github.com/jrouwe/JoltPhysics)                                                                               |
| Valve GameNetworkingSockets | Reliable and unreliable multiplayer transport      | [github](https://github.com/ValveSoftware/GameNetworkingSockets)                                                              |
| OpenSSL, protobuf, zlib     | Secure networking and GNS dependencies             | [OpenSSL](https://www.openssl.org/), [protobuf](https://protobuf.dev/), [zlib](https://zlib.net/)                             |
| cpp-httplib                 | HTTP client for online services                    | [github](https://github.com/yhirose/cpp-httplib)                                                                              |
| IXWebSocket                 | WebSocket channels for real-time online services   | [github](https://github.com/machinezone/IXWebSocket)                                                                          |
| cgltf                       | glTF / GLB model loading                           | [github](https://github.com/jkuhlmann/cgltf)                                                                                  |
| ufbx                        | FBX intake for character and animation import      | [github](https://github.com/ufbx/ufbx)                                                                                        |
| stb                         | Image decode and utility helpers                   | [github](https://github.com/nothings/stb)                                                                                     |
| dr_libs                     | Audio decode for WAV / PCM pipelines               | [github](https://github.com/mackron/dr_libs)                                                                                  |
| nlohmann/json               | Maps, manifests, settings, and UI documents        | [github](https://github.com/nlohmann/json)                                                                                    |
| Dear ImGui (docking)        | Editor panels and debug overlays                   | [github](https://github.com/ocornut/imgui)                                                                                    |
| ImGuizmo                    | Viewport transform gizmos                          | [github](https://github.com/CedricGuillemet/ImGuizmo)                                                                         |
| Steamworks SDK + SteamPipe  | Identity, overlay, friends, and Steam distribution | [SDK](https://partner.steamgames.com/doc/sdk), [SteamPipe](https://partner.steamgames.com/doc/sdk/updating)                   |

## Core Platform

| Feature                      | Description                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| Modern Desktop Runtime       | Fast startup, responsive windowing, and a competitive input loop                          |
| Cross-cutting Infrastructure | Logging, crash reporting, and online hooks without fragile one-offs                       |
| Flexible Identity            | Dev logins for local work, Steam identity for real players                                |
| Steam-ready Distribution     | Steamworks integration and SteamPipe scaffolding for private playtests and public release |

## Renderer

| Feature                      | Description                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| Physically Based Rendering   | Materials and Lighting on OpenGL 4.1                                                                  |
| Dynamic Lighting and Shadows | Point, directional, and spot lights with scalable shadow quality                                      |
| Atmosphere Tools             | Skyboxes, fog volumes, and volumetric fog for readable scenes and mood                                |
| Decals                       | Mesh-projected and volume decals for wear, marking, and environmental detail                          |
| Reflections                  | Screen-space reflections and authored reflection probes                                               |
| Baked Global Illumination    | Irradiance volumes with in-editor lighting builds for stable indoor bounce                            |
| First-person Presentation    | Dedicated viewmodel pass                                                                              |
| Cinematic Post-process       | Bloom, exposure, tonemapping, color grading and LUTs, vignette, FXAA, AO, and optional depth of field |
| Scalable Graphics            | Quality tiers to support a wide range of hardware                                                     |

## Worlds and Content

| Feature             | Description                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- |
| Full Level Format   | Save, validate, cook, and package maps as first-class project assets                         |
| Rich Entity Toolkit | Meshes, brushes, terrain, lights, volumes, effects, audio, and gameplay markers in one scene |
| Fast Blockout       | FPS-friendly floors, walls, cover, primitives, and brushes for rapid scene layout            |
| Advanced Geometry   | CSG, splines, terrain sculpting, and parametric brush pieces                                 |
| Prefab Workflow     | Build once, place many — edit live instances or stamp unique copies                          |
| Asset Import        | Bring in models, textures, PBR sets, and audio with batch-friendly tooling                   |
| Character Intake    | gLTF and FBX-friendly animation packs bound to character definitions                         |
| Dependency Tracking | Find references and ship complete content packs without missing assets                       |
| Map Collaboration   | Per-level git workflows for sharing and iterating on maps                                    |

## Physics and Characters

| Feature                        | Description                                                        |
| ------------------------------ | ------------------------------------------------------------------ |
| Production Physics             | Jolt-backed simulation for solid movement and collisions           |
| Competitive Character Movement | Predictable controllers shared between client and server           |
| Gameplay Queries               | Traces, overlaps, and spawn selection with team and side awareness |
| Possession and Spectating      | Clean handoff between playing and watching                         |

## Animation

| Feature                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| Skeletal Animation              | Full skinned characters with clip playback and blending               |
| Locomotion Systems              | State machines and blend spaces for natural movement                  |
| Combat Animation                | Montages, bone masks, hit reactions, and death ragdolls               |
| Weapon Integration              | Grip sockets and attachment IK so weapons sit correctly in hand       |
| Retargeting                     | Reuse animation across humanoid skeletons                             |
| First- and Third-person Support | Viewmodels for the local player, full-body presentation for opponents |

<img src="/pinscher3.webp" alt="Pinscher Editor" class="img-half" />

Rigged Models and Animations.

## Audio

| Feature             | Description                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| Sound Mixer         | Dedicated buses for SFX, music, VO, and UI                               |
| Context-aware Mixes | Snapshots that automatically rebalance within their context window       |
| World Audio         | Spatial sources, soundscapes, occlusion, and reverb for immersive scenes |
| Efficient Formats   | High-quality WAV with optional ADPCM compression for ship size           |

## Multiplayer and Netcode

| Feature                     | Description                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| Dedicated-server Networking | GameNetworkingSockets transport built for authoritative multiplayer                        |
| Competitive Feel            | Client prediction, reconciliation, and remote interpolation tuned for WAN play             |
| Fair Melee                  | Lag-compensated rewind so actions read correctly under latency                             |
| Replication and Events      | Snapshot sync plus a gameplay event channel for reliable game feedback                     |
| Session Resilience          | Reconnect budgets and server lifecycle hooks for real multiplayer scenarios                |
| Flexible Join Paths         | Direct connect for LAN and development, online matchmaking seams for service-backed queues |

## UI

| Feature                      | Description                                                          |
| ---------------------------- | -------------------------------------------------------------------- |
| Data-driven Interface System | Author menus and HUDs as documents with themes and safe-area scaling |
| Full Widget Library          | Buttons, sliders, lists, tabs, inputs, keybinds, prompts, and more   |
| Game-ready HUD Foundation    | Built to support health, energy, abilities, feeds, and match chrome  |

## Editor

| Feature                   | Description                                                              |
| ------------------------- | ------------------------------------------------------------------------ |
| Professional Level Editor | Docked layout, command palette, shortcuts, and persistent workspaces     |
| Dual Viewports            | 3D and 2D views for placement and precise blockout                       |
| Content Studios           | Material, texture, FX, animation, prefab, sound, and UI tools in one app |
| Play-in-editor            | Instant playtests, including local multiplayer sessions                  |
| Ship Pipeline             | Validate, build, and package maps for testers or install builds          |
| Authoring Safety          | Layers, hide and isolate, autosave, and crash recovery                   |
| Lighting Build Tools      | Bake global illumination and refresh probes from the editor              |

<img src="/pinscher1.webp" alt="Pinscher Editor" class="img-half" />

Project Browser - Create a new level or load an existing one by title. Supports automated sync with git.

## Tools and Developer Experience

| Feature               | Description                                                        |
| --------------------- | ------------------------------------------------------------------ |
| Content CLI Utilities | Sound compression and ORM texture packing for production assets    |
| Deep Debug Tooling    | Console, profiler overlays, debug draw, and performance visibility |

<img src="/peppa.webp" alt="Pepper" class="img-quarter" />

Pepper, unofficial QA lead and Pinscher mascot.
