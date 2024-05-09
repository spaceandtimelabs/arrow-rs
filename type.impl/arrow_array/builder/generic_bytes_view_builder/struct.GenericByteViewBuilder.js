(function() {var type_impls = {
"arrow_array":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrayBuilder-for-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#169-193\">source</a><a href=\"#impl-ArrayBuilder-for-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a> for <a class=\"struct\" href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_view_builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#170-172\">source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the number of array slots in the builder</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#174-176\">source</a><a href=\"#method.finish\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class='docblock'>Builds the array</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#178-180\">source</a><a href=\"#method.finish_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class='docblock'>Builds the array without resetting the underlying builder.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#182-184\">source</a><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class='docblock'>Returns the builder as a non-mutable <code>Any</code> reference. <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#186-188\">source</a><a href=\"#method.as_any_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any_mut\" class=\"fn\">as_any_mut</a>(&amp;mut self) -&gt; &amp;mut dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class='docblock'>Returns the builder as a mutable <code>Any</code> reference. <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any_mut\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_box_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#190-192\">source</a><a href=\"#method.into_box_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.into_box_any\" class=\"fn\">into_box_any</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;Self&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt;</h4></section></summary><div class='docblock'>Returns the boxed builder as a box of <code>Any</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/mod.rs.html#243-245\">source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#method.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether number of array slots is zero</div></details></div></details>","ArrayBuilder","arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#157-167\">source</a><a href=\"#impl-Debug-for-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_view_builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#158-166\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#151-155\">source</a><a href=\"#impl-Default-for-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_view_builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#152-154\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3COption%3CV%3E%3E-for-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#195-204\">source</a><a href=\"#impl-Extend%3COption%3CV%3E%3E-for-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_view_builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#199-203\">source</a><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;&gt;(&amp;mut self, iter: I)</h4></section></summary><div class='docblock'>Extends a collection with the contents of an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#452\">source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: A)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#460\">source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<Option<V>>","arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#42-149\">source</a><a href=\"#impl-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"struct\" href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_view_builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#44-46\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_view_builder::GenericByteViewBuilder\"><code>GenericByteViewBuilder</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#49-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_view_builder::GenericByteViewBuilder\"><code>GenericByteViewBuilder</code></a> with space for <code>capacity</code> string values.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_block_size\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#61-63\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html#tymethod.with_block_size\" class=\"fn\">with_block_size</a>(self, block_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Override the size of buffers to allocate for holding string data</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_value\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#73-105\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html#tymethod.append_value\" class=\"fn\">append_value</a>(&amp;mut self, value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Appends a value into the builder</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if</p>\n<ul>\n<li>String buffer count exceeds <code>u32::MAX</code></li>\n<li>String length exceeds <code>u32::MAX</code></li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_option\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#109-114\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html#tymethod.append_option\" class=\"fn\">append_option</a>(&amp;mut self, value: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>Append an <code>Option</code> value into the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_null\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#118-121\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html#tymethod.append_null\" class=\"fn\">append_null</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Append a null value into the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#124-134\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\"><code>GenericByteViewArray</code></a> and reset this builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#137-148\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_bytes_view_builder/struct.GenericByteViewBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\"><code>GenericByteViewArray</code></a> without resetting the builder</p>\n</div></details></div></details>",0,"arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()