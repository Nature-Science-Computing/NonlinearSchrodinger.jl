var documenterSearchIndex = {"docs":
[{"location":"private/","page":"Internals","title":"Internals","text":"Documentation for NonlinearSchrodinger.jl's internals.","category":"page"},{"location":"private/#Contents","page":"Internals","title":"Contents","text":"","category":"section"},{"location":"private/","page":"Internals","title":"Internals","text":"Pages = [\"private.md\"]","category":"page"},{"location":"private/#Index","page":"Internals","title":"Index","text":"","category":"section"},{"location":"private/","page":"Internals","title":"Internals","text":"Pages = [\"private.md\"]","category":"page"},{"location":"private/#API","page":"Internals","title":"API","text":"","category":"section"},{"location":"private/","page":"Internals","title":"Internals","text":"Modules = [NonlinearSchrodinger]\nPublic = false\nPages = [\"Darboux.jl\", \"Simulation.jl\", \"Types.jl\", \"Utilities.jl\"]","category":"page"},{"location":"private/#NonlinearSchrodinger.soln_loop_A-Tuple{Any,Any,Any}","page":"Internals","title":"NonlinearSchrodinger.soln_loop_A","text":"soln_loop_A(sim, ops, ind_p))\n\nPropagate in x for integrators of type A (i.e. starting with nonlinear step, thus in real space).\n\nSee also: Sim, solve!\n\n\n\n\n\n","category":"method"},{"location":"private/#NonlinearSchrodinger.soln_loop_B-Tuple{Any,Any,Any}","page":"Internals","title":"NonlinearSchrodinger.soln_loop_B","text":"soln_loop_B(sim, ops, ind_p))\n\nPropagate in x for integrators of type B (i.e. starting with dispersion step, thus in frequency space).\n\nSee also: Sim, solve!\n\n\n\n\n\n","category":"method"},{"location":"private/#NonlinearSchrodinger.Operators-Tuple{Any}","page":"Internals","title":"NonlinearSchrodinger.Operators","text":"function Operators(sim)\n\nConstruct appropriate operators for sim::Sim. These include the Fourier operator F̂, inverse Fourier operator F̃̂, dispersion operaotr K̂, and Hirota/Sasa-Satsuma operators B̂ and B̂B. This object also includes some arrays for temporary operations in Nystrom integrators.\n\nSee also: Sim\n\n\n\n\n\n","category":"method"},{"location":"man/integrators/#Integrators","page":"Integrators","title":"Integrators","text":"","category":"section"},{"location":"man/integrators/","page":"Integrators","title":"Integrators","text":"This page shows the availabe integrators. Integrators prefixed with _H are used for the Hirota equation, and those with _SS are for the Sasa-Satsuma equation. Note that both these equations are not fully tested and should be used with utmost care due to the periodic boundary conditions.","category":"page"},{"location":"man/integrators/","page":"Integrators","title":"Integrators","text":"Pages = [\"integrators.md\"]","category":"page"},{"location":"man/integrators/","page":"Integrators","title":"Integrators","text":"T1A!\nT1B!\nT2A!\nT2B!\nT4A_TJ!\nT4B_TJ!\nT6A_TJ!\nT6B_TJ!\nT8A_TJ!\nT8B_TJ!\nT4A_SF!\nT4B_SF!\nT6A_SF!\nT6B_SF!\nT8A_SF!\nT8B_SF!\nT4A_CMP!\nT4B_CMP!\nT6A_CMP!\nT6B_CMP!\nT8A_CMP!\nT8B_CMP!\nT6A_OP!\nT6B_OP!\nT8A_OP!\nT8B_OP!\nT1A_H!\nT2A_H!\nT1A_SS!","category":"page"},{"location":"man/integrators/#NonlinearSchrodinger.T1A!","page":"Integrators","title":"NonlinearSchrodinger.T1A!","text":"T1A!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic first order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T1B!","page":"Integrators","title":"NonlinearSchrodinger.T1B!","text":"T1B!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic first order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T2A!","page":"Integrators","title":"NonlinearSchrodinger.T2A!","text":"T2A!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic second order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T2B!","page":"Integrators","title":"NonlinearSchrodinger.T2B!","text":"T2B!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic second order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T4A_TJ!","page":"Integrators","title":"NonlinearSchrodinger.T4A_TJ!","text":"T4A_TJ!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Triple Jump Fourth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T4B_TJ!","page":"Integrators","title":"NonlinearSchrodinger.T4B_TJ!","text":"T4B_TJ!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Triple Jump Fourth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T6A_TJ!","page":"Integrators","title":"NonlinearSchrodinger.T6A_TJ!","text":"T6A_TJ!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Triple Jump Sixth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T6B_TJ!","page":"Integrators","title":"NonlinearSchrodinger.T6B_TJ!","text":"T6B_TJ!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Triple Jump Sixth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T8A_TJ!","page":"Integrators","title":"NonlinearSchrodinger.T8A_TJ!","text":"T8A_TJ!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Triple Jump Eighth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T8B_TJ!","page":"Integrators","title":"NonlinearSchrodinger.T8B_TJ!","text":"T8A_TJ!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Triple Jump Eighth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T4A_SF!","page":"Integrators","title":"NonlinearSchrodinger.T4A_SF!","text":"T4A_SF!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Suzuki's Fractal Fourth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T4B_SF!","page":"Integrators","title":"NonlinearSchrodinger.T4B_SF!","text":"T4B_SF!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Suzuki's Fractal Fourth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T6A_SF!","page":"Integrators","title":"NonlinearSchrodinger.T6A_SF!","text":"T6A_SF!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Suzuki's Fractal Sixth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T6B_SF!","page":"Integrators","title":"NonlinearSchrodinger.T6B_SF!","text":"T6B_SF!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Suzuki's Fractal Sixth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T8A_SF!","page":"Integrators","title":"NonlinearSchrodinger.T8A_SF!","text":"T8A_SF!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Suzuki's Fractal Eighth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T8B_SF!","page":"Integrators","title":"NonlinearSchrodinger.T8B_SF!","text":"T8B_SF!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic Suzuki's Fractal Eighth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T4A_CMP!","page":"Integrators","title":"NonlinearSchrodinger.T4A_CMP!","text":"T4A_CMP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a Chin Multi-Product Fourth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T4B_CMP!","page":"Integrators","title":"NonlinearSchrodinger.T4B_CMP!","text":"T4B_CMP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a Chin Multi-Product Fourth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T6A_CMP!","page":"Integrators","title":"NonlinearSchrodinger.T6A_CMP!","text":"T6A_CMP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a Chin Multi-Product Sixth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T6B_CMP!","page":"Integrators","title":"NonlinearSchrodinger.T6B_CMP!","text":"T6B_CMP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a Chin Multi-Product Sixth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T8A_CMP!","page":"Integrators","title":"NonlinearSchrodinger.T8A_CMP!","text":"T8A_CMP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a Chin Multi-Product Eighth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T8B_CMP!","page":"Integrators","title":"NonlinearSchrodinger.T8B_CMP!","text":"T8B_CMP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a Chin Multi-Product Eighth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T6A_OP!","page":"Integrators","title":"NonlinearSchrodinger.T6A_OP!","text":"T6A_OP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using an Optimized Symplectic Sixth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T6B_OP!","page":"Integrators","title":"NonlinearSchrodinger.T6B_OP!","text":"T6B_OP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using an Optimized Symplectic Sixth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T8A_OP!","page":"Integrators","title":"NonlinearSchrodinger.T8A_OP!","text":"T8A_OP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using an Optimized Symplectic Eighth order integrator of type A. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T8B_OP!","page":"Integrators","title":"NonlinearSchrodinger.T8B_OP!","text":"T8B_OP!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using an Optimized Symplectic Eighth order integrator of type B. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T1A_H!","page":"Integrators","title":"NonlinearSchrodinger.T1A_H!","text":"T1A_H!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic first order integrator of type A for the Hirota equation. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T2A_H!","page":"Integrators","title":"NonlinearSchrodinger.T2A_H!","text":"T2A_H!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic second order integrator of type A for the Hirota equation. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/integrators/#NonlinearSchrodinger.T1A_SS!","page":"Integrators","title":"NonlinearSchrodinger.T1A_SS!","text":"T1A_SS!(ψₒ, ψᵢ, dx, ops)\n\nCompute ψₒ, i.e. ψᵢ advanced a step dx forward using a symplectic first order integrator of type A for the Sasa-Satsuma equation. The structure ops::Operators contains the FFT plans and the kinetic energy operators.  \n\nSee also: solve!, Operators\n\n\n\n\n\n","category":"function"},{"location":"man/visualization/#Visualization","page":"Visualization","title":"Visualization","text":"","category":"section"},{"location":"man/visualization/#Recipes","page":"Visualization","title":"Recipes","text":"","category":"section"},{"location":"man/visualization/","page":"Visualization","title":"Visualization","text":"NonlinearSchrodinger.jl provides recipes for Plots.jl to make plotting easy. You can simply call any plotting function on a ::Sim or ::Calc object, as shown in the examples pages.","category":"page"},{"location":"man/visualization/#Visualizing-Recursion","page":"Visualization","title":"Visualizing Recursion","text":"","category":"section"},{"location":"man/visualization/","page":"Visualization","title":"Visualization","text":"We can visualize the DT recursion as follows. We acknowledge the major assistance provided by Simon Schoelly (@simonschoelly) in writing this code.","category":"page"},{"location":"man/visualization/","page":"Visualization","title":"Visualization","text":"using LightGraphs, MetaGraphs, Plots, GraphRecipes, LaTeXStrings\ndefault(size=(1000,1000))\n\nfunction gen_rec_graph(N, pal)\n    \n    function DT_recurse(n, p, g, N, pal)\n        if !haskey(g[:name], (n, p)) # if there is not already a node with name (n, p)\n            # add a new vertex and set it's name to (n, p)\n            # the most recent added vertex always has the index nv(g)\n            add_vertex!(g) \n            set_prop!(g, nv(g), :name, (n, p))\n            set_prop!(g, nv(g), :size, N)\n            set_prop!(g, nv(g), :col, pal[N])\n        end\n        if n != 1\n            # recurse as usual\n            DT_recurse(n-1, 1, g, N-1, pal)\n            DT_recurse(n-1, p+1, g, N-1, pal)\n\n            # at this point, the vertices with the names (n, p), (n-1, 1) and (n-1, p+1) already exist\n            # so we look them up by their name\n            v1 = g[(n, p), :name]\n            v2 = g[(n-1, 1), :name]\n            v3 = g[(n-1, p+1), :name]\n\n            # add edges (n, p) -> (n-1, 1)  and (n, p) -> (n-1, p+1)\n            add_edge!(g, v1, v2)\n            add_edge!(g, v1, v3)\n        end\n        return nothing\n    end\n    \n    g = MetaDiGraph() # empty graph\n    set_indexing_prop!(g, :name) # allows one to look up nodes by the attribute :name\n\n    DT_recurse(N, 1, g, N, pal)\n    \n    return g\nend\n\nN = 4\npal = palette(:heat, Int(floor(1.5*N)))\ng = gen_rec_graph(N, pal)\n    \np = graphplot(g, names = [latexstring(get_prop(g, v, :name)) for v in vertices(g)], \n              arrow=:arrow, \n              nodeshape=:circle, \n              curvature_scalar=0.0, \n              nodeweights=[get_prop(g, v, :size) for v in vertices(g)], \n              markercolor=[get_prop(g, v, :col) for v in vertices(g)], \n              fontsize=14, \n              markersize=0.04, \n              linewidth=2, \n              method=:tree, \n              curves=false)\n\nsavefig(\"recurse_4.svg\") #hide","category":"page"},{"location":"man/visualization/","page":"Visualization","title":"Visualization","text":"(Image: )","category":"page"},{"location":"man/visualization/","page":"Visualization","title":"Visualization","text":"Note that the placement of the nodes is a little random, you might have to issue the plot command a few times to get a satisfactory result where the nodes don't overlap.","category":"page"},{"location":"man/simulations/#Simulations","page":"Simulations","title":"Simulations","text":"","category":"section"},{"location":"man/simulations/","page":"Simulations","title":"Simulations","text":"To review the theory of how simulations are done using the split-step fourier method, please review the paper (to be posted on the arXiv soon). For examples, see the Simulation Examples page. For the available algorithms, see the Integrators page.","category":"page"},{"location":"public/","page":"Public API","title":"Public API","text":"Documentation for NonlinearSchrodinger.jl's public API.","category":"page"},{"location":"public/#Contents","page":"Public API","title":"Contents","text":"","category":"section"},{"location":"public/","page":"Public API","title":"Public API","text":"Pages = [\"public.md\"]","category":"page"},{"location":"public/#Index","page":"Public API","title":"Index","text":"","category":"section"},{"location":"public/","page":"Public API","title":"Public API","text":"Pages = [\"public.md\"]","category":"page"},{"location":"public/#API","page":"Public API","title":"API","text":"","category":"section"},{"location":"public/","page":"Public API","title":"Public API","text":"Modules = [NonlinearSchrodinger]\nPrivate = false\nPages = [\"Darboux.jl\", \"Simulation.jl\", \"Types.jl\", \"Utilities.jl\"]","category":"page"},{"location":"public/#NonlinearSchrodinger.solve!-Tuple{Calc}","page":"Public API","title":"NonlinearSchrodinger.solve!","text":"solve!(calc::Calc)\n\nSolves the object sim::Calc.\n\nSee also: Calc\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.solve!-Tuple{Sim}","page":"Public API","title":"NonlinearSchrodinger.solve!","text":"solve!(sim::Sim)\n\nSolves the object sim::Sim.\n\nSee also: Sim\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.Box-Tuple{Pair,Any}","page":"Public API","title":"NonlinearSchrodinger.Box","text":"function Box(xᵣ::Pair, T; dx, Nₓ, Nₜ, n_periods)\n\nCreate a ::Box object with Nₜ transverse nodes, Nₓ longitudinal nodes (or dx grid spacing in the lontidunal direction, only one option can be specified), of size [(xᵣ.first), (xᵣ.second)] in the longitudinal direction and [(-T*n_periods/2), (T*n_periods/2))\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.Calc-Union{Tuple{TT}, Tuple{Array{Complex{TT},N} where N,Any,Any,Any,Any}} where TT<:Real","page":"Public API","title":"NonlinearSchrodinger.Calc","text":"function Calc(λ::Array{Complex{TT}}, tₛ, xₛ, seed, box; m=0.0) where TT <: Real\n\nCreate a ::Calc object with eigenvalues λ, shifts xₛ and tₛ and seeding solution seed. box::Box is the Box object used for the calculation and m is the elliptic parameter for cnoidal solutions. seed can have the following values:\n\nseed = \"0\" implies psi_0 = 0\n\nseed = \"exp\" implies psi_0 = e^ix\n\nseed = \"dn\" implies psi_0 = dn(t m)e^ix(1-m2)\n\nseed = \"cn\" implies psi_0 = sqrtmcn(t m)e^ix(m - 12)\n\nf::Dict{Symbol, Float64} is a dictionary of extended NLSE parameters.\n\nSee also: Box\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.Sim-Union{Tuple{TT}, Tuple{Any,Box,Array{Complex{TT},1},Any}} where TT<:Real","page":"Public API","title":"NonlinearSchrodinger.Sim","text":"function Sim(λ, box::Box, ψ₀::Array{Complex{TT}, 1}, T̂; α = 0.0, ϵ=0.0, β=0.0) where TT <: Rea\n\nCreate a ::Sim object corresponding to eigenvalue λ (only used for breathers, ignored for arbitrary initial conditions), initial condition ψ₀ and algorithm T̂. α is the Hirota equation parameter and ϵ is the Sasa-Satsuma equation parameter. β controls pruning.\n\nSee also: Box\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.PHF-Tuple{Calc}","page":"Public API","title":"NonlinearSchrodinger.PHF","text":"PHF(calc::Calc)\n\nComputed the peak height formula for any calc::Calc objecti irrespective of seed.\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.compute_IoM!-Tuple{Any}","page":"Public API","title":"NonlinearSchrodinger.compute_IoM!","text":"function compute_IoM!(obj)\n\nComputes the integrals of motion of obj.ψ and saves them in respective fields of obj. obj can be a ::Sim or ::Calc object. The fields are:\n\nobj.KE  # Array containing the kinetic energy K(x)\nobj.PE  # Array containing the potential energy V(x)\nobj.E   # Array containing the energy H(x)\nobj.N   # Array containing the norm N(x)\nobj.P   # Array containing the momentum P(x)\nobj.dE  # Array containing the energy error δE(x)\nobj.dN  # Array containing the norm error δN(x)\nobj.dP  # Array containing the momentum error δP(x)\n\nResult can be plotted using plot(obj, :IoM)\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.params-Tuple{}","page":"Public API","title":"NonlinearSchrodinger.params","text":"function params(; kwargs...)\n\nComputes parameters λ, T, Ω given either of λ, T, Ω, a and possibly m for dnoidal seed. Used only for exp and dn seeds.\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.λ_given_f-Tuple{Any,Any}","page":"Public API","title":"NonlinearSchrodinger.λ_given_f","text":"λ_given_f(f, ν)\n\nComputes λ = v + i ν such that v results in breather to soliton conversion for the extended NLS characterized by the dictionary of parameters f.\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.λ_given_m-Tuple{Any}","page":"Public API","title":"NonlinearSchrodinger.λ_given_m","text":"λ_given_m(m; q = 2)\n\nComputed a λ that is matched to the dnoidal background given by m with an integer q. See paper for more details.\n\nSee also: λ_maximal\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.λ_maximal-Tuple{Any,Any}","page":"Public API","title":"NonlinearSchrodinger.λ_maximal","text":"λ_maximal(λ₁, N; m = 0)\n\nComputed a maximal intensity set of λ of order N given λ₁ and possibly m for dnoidal bakcground.\n\nSee also: λ_given_m\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.ψ₀_DT-NTuple{5,Any}","page":"Public API","title":"NonlinearSchrodinger.ψ₀_DT","text":"ψ₀_DT(λ, tₛ, xₛ, X₀, box; seed=\"exp\", f = Dict(:α=> 0.0, :γ => 0.0, :δ=>0.0))\n\nComputes an initial condition using the DT characterized by λ, xₛ, tₛ and seed at x = X₀ for the extended equation characterized by a dictionary of parameters f (currently only α) is supported. box::Box is the simulation box.\n\nSee also: Calc, Sim\n\n\n\n\n\n","category":"method"},{"location":"public/#NonlinearSchrodinger.ψ₀_periodic-Tuple{Array,Box,Any}","page":"Public API","title":"NonlinearSchrodinger.ψ₀_periodic","text":"function ψ₀_periodic(coeff::Array, box::Box, Ω; phase=0)\n\nComputes an initial wavefunction for the box::Box, with fundamental frequency Ω and coefficients A_1ldots n = coeff and an overall phase e^i phi t where phi = phase. i.e. psi_0 is of the form:\n\npsi(x=0 t) = e^i phi t (A_0 + 2 sum_1^n A_m cos(m Omega t))\n\nwhere:\n\nA_0 = sqrt1 - 2 sum_m=1^n A_m^2\n\n\n\n\n\n","category":"method"},{"location":"man/dt/#Darboux-Transformations","page":"Darboux Transformations","title":"Darboux Transformations","text":"","category":"section"},{"location":"man/dt/","page":"Darboux Transformations","title":"Darboux Transformations","text":"Please see the paper to review the theory of Darboux Trasformations, and the Darboux Transformation Examples page for examples.","category":"page"},{"location":"man/dt/#Supported-Equations","page":"Darboux Transformations","title":"Supported Equations","text":"","category":"section"},{"location":"man/dt/","page":"Darboux Transformations","title":"Darboux Transformations","text":"The most general equation supported by the Darboux transformation in NonlinearSchrodinger.jl is of the following form:","category":"page"},{"location":"man/dt/","page":"Darboux Transformations","title":"Darboux Transformations","text":"ipsi _x + Spsi (xt) - ialpha Hpsi (xt) + gamma Ppsi (xt) - idelta Qpsi (xt) = 0","category":"page"},{"location":"man/dt/","page":"Darboux Transformations","title":"Darboux Transformations","text":"where","category":"page"},{"location":"man/dt/","page":"Darboux Transformations","title":"Darboux Transformations","text":"beginaligned\nSpsi (xt) = frac12psi _tt + left psi  right^2psi \nHpsi (xt) = psi _ttt + 6left psi  right^2psi _t \nPpsi (xt) = psi _tttt + 8left psi  right^2psi _tt + 6left psi  right^4psi + 4left psi _t right^2psi + 6psi _t^2psi ^* + 2psi ^2psi _tt^* \nQpsi (xt) = psi _ttttt + 10left psi  right^2psi _ttt + 30left psi  right^4psi _t + 10psi psi _tpsi _tt^* + 10psi psi _t^*psi _tt + 20psi ^*psi _tpsi _tt + 10psi _t^2psi _t^*\nendaligned","category":"page"},{"location":"man/dt/","page":"Darboux Transformations","title":"Darboux Transformations","text":"Special cases include the cubic nonlinear Schrodinger equation (alpha = gamma = delta = 0), the Hirota equation (alpha neq 0 gamma = delta = 0) the Lakshmanan-Porsezian-Daniel (LPD) equation (gamma neq 0 alpha = delta = 0) and the Quintic nonlinear Schrodinger equation (delta neq 0 alpha = gamma = 0).","category":"page"},{"location":"man/dt/","page":"Darboux Transformations","title":"Darboux Transformations","text":"For this generalized NLSE, we support both the breather and soliton seeds. Additionally, for the cubic NLSE, we support the cn and dn seeds. Support for these seeds will be added at some point in the future for the generalized NLSE.","category":"page"},{"location":"man/sim_examples/#Simulation-Examples","page":"Simulation Examples","title":"Simulation Examples","text":"","category":"section"},{"location":"man/sim_examples/#Example-1:-Cosine-Wave-Initial-Condition","page":"Simulation Examples","title":"Example 1: Cosine Wave Initial Condition","text":"","category":"section"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"using NonlinearSchrodinger\nusing Plots\nusing LaTeXStrings","category":"page"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"λ, T, Ω = params(λ = 0.8im)\n\nxᵣ = 0=>20\nbox = Box(xᵣ, T, dx=5e-3, Nₜ = 256, n_periods = 1)\n\ncoeff = [1e-4]\nψ₀, A₀ = ψ₀_periodic(coeff, box, Ω)\n\nsim = Sim(λ, box, ψ₀, T4A_TJ!)\n\nsolve!(sim)\ncompute_IoM!(sim)\nsurface(sim)\nsavefig(\"example1_psi.svg\") #hide\nheatmap(sim, :ψ̃)\nsavefig(\"example1_psi_tilde.svg\") #hide\nplot(sim, :IoM)\nsavefig(\"example1_IoM.svg\") #hide","category":"page"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"(Image: ) (Image: ) (Image: )","category":"page"},{"location":"man/sim_examples/#Example-2:-Soliton-Initial-Condition","page":"Simulation Examples","title":"Example 2: Soliton Initial Condition","text":"","category":"section"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"using NonlinearSchrodinger\nusing Plots\nusing LaTeXStrings","category":"page"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"λ = 0.75im\n\nT = 20\nxᵣ = 0=>20\nbox = Box(xᵣ, T, dx=1e-2, Nₜ = 256, n_periods = 1)\n\nψ₀ = Array{Complex{Float64}}(undef, box.Nₜ)\nψ₀ .= 2*imag(λ)./cosh.(2*imag(λ).*box.t)\n\nsim = Sim(λ, box, ψ₀, T4A_TJ!)\n\nsolve!(sim)\nsurface(sim)\nsavefig(\"example2.svg\") # hide","category":"page"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"(Image: )","category":"page"},{"location":"man/sim_examples/#Example-3:-Nonlinear-Talbot-Carpet-(Pruning)","page":"Simulation Examples","title":"Example 3: Nonlinear Talbot Carpet (Pruning)","text":"","category":"section"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"using NonlinearSchrodinger\nusing Plots\nusing LaTeXStrings","category":"page"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"λ, T, Ω = params(a = 0.36)\n\nxᵣ = 0=>60\nbox = Box(xᵣ, T, dx=1e-2, Nₜ = 512, n_periods = 5)\n\ncoeff = [(2.7 + 4.6im)*1e-2]\nψ₀, A₀ = ψ₀_periodic(coeff, box, Ω)\n\nsim = Sim(λ, box, ψ₀, T4A_TJ!, β=10.0)\n\nsolve!(sim)\nheatmap(sim)\nsavefig(\"example3_psi.svg\") #hide\nplot(sim, :ψ̃)\nsavefig(\"example3_psi_tilde.svg\") #hide","category":"page"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"(Image: ) (Image: )","category":"page"},{"location":"man/sim_examples/#Example-4:-Darboux-Transformation-Initial-Condition","page":"Simulation Examples","title":"Example 4: Darboux Transformation Initial Condition","text":"","category":"section"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"using NonlinearSchrodinger\nusing Plots\nusing LaTeXStrings","category":"page"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"λ₁ = 0.98im\nλ, T, Ω = params(λ = λ₁)\n\nxᵣ = 0=>20\nbox = Box(xᵣ, T, dx=5e-3, Nₜ = 512, n_periods = 1)\n\nλ = λ_maximal(λ₁, 5) # array of 5 eigenvalues\nxₛ = [0.0, 0.0, 0.0, 0.0, 0.0]\ntₛ = [0.0, 0.0, 0.0, 0.0, 0.0]\nψ₀ = ψ₀_DT(λ, tₛ, xₛ, -10, box)\n\nsim = Sim(λ₁, box, ψ₀, T4A_TJ!)\n\nsolve!(sim)\ncompute_IoM!(sim)\nheatmap(sim) \nsavefig(\"example4.svg\") #hide","category":"page"},{"location":"man/sim_examples/","page":"Simulation Examples","title":"Simulation Examples","text":"(Image: )","category":"page"},{"location":"man/dt_examples/#Darboux-Transformation-Examples","page":"DT Examples","title":"Darboux Transformation Examples","text":"","category":"section"},{"location":"man/dt_examples/#Example-1:-7-Soliton-Collision","page":"DT Examples","title":"Example 1: 7 Soliton Collision","text":"","category":"section"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"using NonlinearSchrodinger\nusing Plots\nusing LaTeXStrings","category":"page"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"xᵣ = -10=>10\nT = 20\nseed = \"0\"\nbox = Box(xᵣ, T, Nₓ=500, Nₜ = 500)\nλ = [-0.45 + 0.775im, -0.35 + 0.8im, -0.25 + 0.825im, 0.85im, 0.25 + 0.875im, 0.35 + 0.9im, 0.45 + 0.925im]\nxₛ = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]\ntₛ = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]\n\ncalc = Calc(λ, tₛ, xₛ, seed, box) \n\nsolve!(calc)\nheatmap(calc) \nsavefig(\"example1.svg\") #hide","category":"page"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"(Image: )","category":"page"},{"location":"man/dt_examples/#Example-2:-Fifth-Order-Maximal-Intensity-Breather","page":"DT Examples","title":"Example 2: Fifth Order Maximal Intensity Breather","text":"","category":"section"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"using NonlinearSchrodinger\nusing Plots\nusing LaTeXStrings","category":"page"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"xᵣ = -10=>10\nλ₁ = 0.98im\nλ, T, Ω = params(λ = λ₁)\nbox = Box(xᵣ, T, Nₓ=500, Nₜ = 500, n_periods = 3)\n\nλ = λ_maximal(λ₁, 5) # array of 5 eigenvalues\nxₛ = [0.0, 0.0, 0.0, 0.0, 0.0]\ntₛ = [0.0, 0.0, 0.0, 0.0, 0.0]\n\nseed = \"exp\"\ncalc = Calc(λ, tₛ, xₛ, seed, box) \n\nsolve!(calc)\nsurface(calc) \nsavefig(\"example2.svg\") #hide","category":"page"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"(Image: )","category":"page"},{"location":"man/dt_examples/#Example-3:-3-Soliton-Collision-on-a-cn-background","page":"DT Examples","title":"Example 3: 3 Soliton Collision on a cn background","text":"","category":"section"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"using NonlinearSchrodinger\nusing Plots\nusing LaTeXStrings","category":"page"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"xᵣ = -10=>10\nT = 20\n\nbox = Box(xᵣ, T, Nₓ=500, Nₜ = 500, n_periods = 1)\nλ = [-0.3+0.85im, 0.9im, 0.3+0.95im]\nxₛ = [0.0, 0.0, 0.0]\ntₛ = [0.0, 0.0, 0.0]\n\nseed = \"cn\"\ncalc = Calc(λ, tₛ, xₛ, seed, box, m = 0.5) \n\nsolve!(calc)\nsurface(calc) \nsavefig(\"example3.svg\") #hide","category":"page"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"(Image: )","category":"page"},{"location":"man/dt_examples/#Example-4:-First-Order-Breather-matched-to-a-dn-Background","page":"DT Examples","title":"Example 4: First Order Breather matched to a dn Background","text":"","category":"section"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"using NonlinearSchrodinger\nusing Plots\nusing LaTeXStrings","category":"page"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"xᵣ = -10=>10\nm = 2/5\nλ = λ_given_m(m, q=4)\nλ, T, Ω = params(λ = λ, m=m)\nbox = Box(xᵣ, T, Nₓ=500, Nₜ = 500, n_periods = 3)\n\nλ = λ_maximal(λ, 1, m=m)\nxₛ = [0.0]\ntₛ = [0.0]\n\nseed = \"dn\"\ncalc = Calc(λ, tₛ, xₛ, seed, box, m=m) \n\nsolve!(calc)\nheatmap(calc) \nsavefig(\"example4.svg\") #hide","category":"page"},{"location":"man/dt_examples/","page":"DT Examples","title":"DT Examples","text":"(Image: )","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = NonlinearSchrodinger","category":"page"},{"location":"#NonlinearSchrodinger","page":"Home","title":"NonlinearSchrodinger","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A suite of tools for Nonlinear Schrodinger Equations","category":"page"},{"location":"","page":"Home","title":"Home","text":"NonlinearSchrodinger.jl is a suite of tools for solving Nonlinear Schrodinger equations via higher-order algorithms and Darboux transformations.","category":"page"},{"location":"#Package-Features","page":"Home","title":"Package Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The following features are currently available:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Solving the cubic Nonlinear Schrodinger equation using a plethora of algortithms of order up to 8 (the number of algorithms available is always increasing!). Symplectic and Nystrom integrators are available.\nSolving the Hirota and Sasa-Satsuma equations using a combined split-step-finite-difference approach using a few different integrators. \nComputing the integrals of motion (energy, momentum, and particle number) and their errors.\nComputing the Darboux Transformation to study complicated analytical solutions. We currently support the breather and soliton seeds for extended nonlinear Schrodinger equations of order up to 5 (including cubic NLS, Hirota, LPD, Quintic, and arbitrary combinations thereof). We also support the cn and dn seeds for the cubic NLS.\nEasy Visualization through Plots.jl recipes.\nVery simple API that allows one to compute very complicated solutions via only a few lines of code.","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"man/dt_examples.md\",\n]\nDepth = 2","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"man/sim_examples.md\",\n]\nDepth = 2","category":"page"},{"location":"#main-index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"public.md\"]","category":"page"}]
}
